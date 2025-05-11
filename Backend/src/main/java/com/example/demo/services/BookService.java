package com.example.demo.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.dto.BookResponseDTO;
import com.example.demo.entity.Books;
import com.example.demo.entity.Students;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.StudentRepo;

import jakarta.transaction.Transactional;

@Service
public class BookService
{
	@Autowired
	private BookRepository bookRepository;
	
	
	@Autowired
	private StudentRepo repo;
	
	public Books addbook(Books bk)
	{
		return bookRepository.save(bk);
	}
	
	//updating the book
	public Books updateBook(Books book) {
	    return bookRepository.save(book); // For update — same method inside, but better naming
	}

	public List<Books> getbook() 
	{
		return bookRepository.findAll();
	}  
	
//	
//	public Optional<Books> getbookByBookNo(String bookno) {
//	    return bookRepository.findByBookno(bookno);
//	}

	public Optional<BookResponseDTO> getBookDtoByBookNo(String bookno) {
	    Optional<Books> bookOptional = bookRepository.findByBookno(bookno);

	    if (bookOptional.isPresent()) {
	        Books book = bookOptional.get();
	        BookResponseDTO dto = new BookResponseDTO();
	        dto.setBookno(book.getBookno());
	        dto.setBookname(book.getBookname());
	        dto.setAuthor(book.getAuthor());
	        dto.setBookdesc(book.getBookdesc());
	        dto.setBookImage(book.getBookImage());

	        return Optional.of(dto);
	    } else {
	        return Optional.empty();
	    }
	}
	
	
	public Books getBookById(int id) {
	    return bookRepository.findById(id)
	            .orElseThrow(() -> new RuntimeException("Book not found with id: " + id));
	}


	public Optional<Books> getbybookno(String bookno) {
	    return bookRepository.findByBookno(bookno);
	}

	 public ResponseEntity<Map<String, String>> registerstudent(String email, String password, String firstname, String lastname, String fieldofstudy, String address) {
	       if (repo.findByEmail(email) != null) {
	           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "User already exists!"));
	       }

	       Students newstd = new Students();
	       newstd.setEmail(email);
	       newstd.setPassword(password); 
	       newstd.setFirstname(firstname);
	       newstd.setLastname(lastname);
	       newstd.setAddress(address);
	       newstd.setFieldofStudy(fieldofstudy);
	       
	       repo.save(newstd);
	       return ResponseEntity.ok(Map.of("message", "User registered successfully!"));
	   }
	   
	   public ResponseEntity<Map<String, String>> loginstudent(String email, String password) {
	       Students existingstd = repo.findByEmail(email);
	       
	       if (existingstd != null && existingstd.getPassword().equals(password)) {
	           return ResponseEntity.ok(Map.of("message", "Login successful!"));
	       }
	       return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("error", "Invalid credentials!"));
	   }
	   
	   //for deleting book
	   
	   @Transactional
	   public void deleteBook(String bookno) {
		    bookRepository.deleteByBookno(bookno); // Assuming custom method or standard JPA method
		}


}
