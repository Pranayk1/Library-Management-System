package com.example.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.BookResponseDTO;
import com.example.demo.dto.IssuedRequest;
import com.example.demo.entity.Books;
import com.example.demo.entity.IssuedBook;
import com.example.demo.entity.Students;
import com.example.demo.services.BookService;
import com.example.demo.services.IssuedbookService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/admin")
public class BookController 
{
	@Autowired
	private BookService bookService;
	
	@Autowired
	private IssuedbookService issuedbookService;
	
	
	
	@GetMapping("/getbooks")
	public List<Books> getallbooks()
	{
		return bookService.getbook();
	}
	
//	  @GetMapping("/book/{bookno}")
//	    public ResponseEntity<Books> getBookByBookno(@PathVariable String bookno) {
//	        Optional<Books> book = bookService.getbookByBookNo(bookno);
//
//	        return book.map(ResponseEntity::ok)
//	                   .orElseGet(() -> ResponseEntity.notFound().build());
//	    }
	
	@GetMapping("/book/{bookno}")
	public ResponseEntity<BookResponseDTO> getBookByBookno(@PathVariable String bookno) {
	    return bookService.getBookDtoByBookNo(bookno)
	                      .map(ResponseEntity::ok)
	                      .orElse(ResponseEntity.notFound().build());
	}


	  @PostMapping("/issue-book/{bookId}")
	    public ResponseEntity<String> issueBook(@PathVariable String bookId,
	                                            @RequestBody IssuedRequest request) {
		  
		  try {
	            // Convert bookId from String to Integer
	            String response = issuedbookService.issueBook(bookId, request);
	            return ResponseEntity.ok(response);
	        } catch (NumberFormatException e) {
	            return ResponseEntity.badRequest().body("Invalid book ID format.");
	        }
		 
	        
	    }
	  
	  
	  @PostMapping("/register")
	    public ResponseEntity<Map<String, String>> registerstudent(@RequestBody Students students) 
	    {
	        return bookService.registerstudent(students.getEmail(), students.getPassword(), students.getFirstname(), students.getLastname(), students.getAddress(), students.getFieldofStudy());
	    }

	    
	    @PostMapping("/login")
	    public ResponseEntity<Map<String, String>> login(@RequestBody Students students) {
	        return bookService.loginstudent(students.getEmail(), students.getPassword());
	    }
	

	    @DeleteMapping("/delete/{bookno}")
	    public ResponseEntity<String> deleteBook(@PathVariable("bookno") String bookno) {
	        Optional<Books> optionalBook = bookService.getbybookno(bookno);
	        if (!optionalBook.isPresent()) {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book not found with bookno: " + bookno);
	        }
	        bookService.deleteBook(bookno);
	        return ResponseEntity.ok("Book deleted successfully.");
	    }

}
