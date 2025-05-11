package com.example.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.IssuedBookResponse;
import com.example.demo.dto.StudentsDTO;
import com.example.demo.entity.Admin;
import com.example.demo.entity.Books;
import com.example.demo.entity.Students;
import com.example.demo.repository.StudentRepo;
import com.example.demo.services.BookService;
import com.example.demo.services.IssuedbookService;

import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:5173")


public class AdminController 
{
	@Autowired
	IssuedbookService issuedbookService;
	
	@Autowired
	BookService bookService;
	
	@Autowired
	
	
	
	//display person issued  book 
	@GetMapping("/display-issued")
	public List<IssuedBookResponse> getAllIssuedBooks() {
	    return issuedbookService.getAllIssuedBooks();
	}
	
	//getting all books in the admin books section
	@GetMapping("/getallbooks")
	public List<Books> getallissuedbooks()
	{
		return bookService.getbook();
	}
	
	@PostMapping("/add")
	public Books savebook(@RequestParam("bookname") String bookname, @RequestParam("bookno") String bookno, @RequestParam("author") String author, @RequestParam("bookdesc") String bookdesc, @RequestParam("copies") int copies, @RequestParam("bookImage") MultipartFile file) throws Exception 
	{
		Books b1 = new Books();
		b1.setBookno(bookno);
		b1.setBookname(bookname);
		b1.setAuthor(author);
		b1.setBookdesc(bookdesc);
		b1.setCopies(copies);
		b1.setBookImage(file.getBytes());
		
		return	bookService.addbook(b1);
		
	}
	
	@PutMapping("/update/{bookno}")
	public Books updateBookByBookno(
	    @PathVariable("bookno") String bookno,
	    @RequestParam("bookname") String bookname,
	    @RequestParam("author") String author,
	    @RequestParam("bookdesc") String bookdesc,
	    @RequestParam("copies") int copies,
	    @RequestParam(value = "bookImage", required = false) MultipartFile file
	) throws Exception {
	    Optional<Books> optionalBook = bookService.getbybookno(bookno);
	    if (!optionalBook.isPresent()) {
	        throw new RuntimeException("Book not found with bookno: " + bookno);
	    }

	    Books existingBook = optionalBook.get();
	    existingBook.setBookname(bookname);
	    existingBook.setAuthor(author);
	    existingBook.setBookdesc(bookdesc);
	    existingBook.setCopies(copies);

	    if (file != null && !file.isEmpty()) {
	        existingBook.setBookImage(file.getBytes());
	    }

	    return bookService.updateBook(existingBook);
	}

	@GetMapping("/getby/{bookno}")
	public Optional<Books> getbybookno(@PathVariable String bookno) {
		
		return bookService.getbybookno(bookno);
	}
	
	@GetMapping("/getbyadmin/{adminpassword}")
	public Optional<Admin> loginadmin(@PathVariable String adminpassword) 
	{
		
		return issuedbookService.adminlogin(adminpassword); 
		
	}
	
	  @GetMapping("/getall/students")
	    public List<StudentsDTO> allstudents() {
	        return issuedbookService.getallstudents();
	    }
	
	
}
