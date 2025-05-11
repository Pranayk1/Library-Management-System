package com.example.demo.services;

import java.time.LocalDateTime;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.dto.IssuedBookResponse;
import com.example.demo.dto.IssuedRequest;
import com.example.demo.dto.StudentsDTO;
import com.example.demo.entity.Admin;
import com.example.demo.entity.Books;
import com.example.demo.entity.IssuedBook;
import com.example.demo.entity.Students;
import com.example.demo.repository.AdminLoginRepository;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.IssuedbookRepository;
import com.example.demo.repository.StudentRepo;
import com.example.demo.emailsend.EmailService;

@Service
public class IssuedbookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private IssuedbookRepository issuedBookRepository;
    
    @Autowired
    private StudentRepo repo;

    @Autowired
    private EmailService emailService;
    
    @Autowired
    private AdminLoginRepository adminLoginRepository;
    
    
    

    public String issueBook(String bookId, IssuedRequest request) {
       
    	
    	// Step 1: Book fetch karna
        Books book = bookRepository.findByBookno(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found with ID: " + bookId));

       

        // Step 3: Create IssuedBook and set values
        IssuedBook issuedBook = new IssuedBook();
        issuedBook.setStudentname(request.getStudentName());
        issuedBook.setStudentemail(request.getStudentEmail());
        issuedBook.setIssueDateTime(LocalDateTime.now()); // Set the combined LocalDateTime
        issuedBook.setBooks(book);

        // Step 4: Save IssuedBook in the database
        issuedBookRepository.save(issuedBook);

        // Step 5: Send email
        String subject = "Book Issued Successfully!";
        String body = "Dear " + request.getStudentName() + ",\n\n"
        		+"We are pleased to inform you that your requested book has been successfully issued from the library.\r\n"
        		+ "Here are the details of your issued book: \n"
                + "* Book Number: " + book.getBookno() + "\n"
                + "* Book Name: " + book.getBookname() + "\n"
                +"* Author Name: " +book.getAuthor() +"\n"
                + "* Description: " + book.getBookdesc() + "\n"
                + "* Issued At: " + issuedBook.getIssueDateTime() + "\n\n"
                +"We hope you enjoy reading and gain valuable knowledge from it. Kindly make sure to return or renew the book on or before the due date to avoid any penalties.\r\n"
                + "\r\n"
                + "Thank you for using our Library Management System. If you have any questions or need assistance, feel free to contact the library staff \n"
                + "Thank you!\nLibrary Team";

        emailService.sendEmail(request.getStudentEmail(), subject, body);

        return "Book issued successfully and email sent!";
    }

//   
    
    public List<IssuedBookResponse> getAllIssuedBooks() {
        List<IssuedBook> issuedBooks = issuedBookRepository.findAll();

        List<IssuedBookResponse> responses = new ArrayList<>();

        for (IssuedBook ib : issuedBooks) {
            IssuedBookResponse res = new IssuedBookResponse();
            res.setStudentname(ib.getStudentname());
            res.setStudentemail(ib.getStudentemail());

            String formattedDateTime = ib.getIssueDateTime()
                    .format(DateTimeFormatter.ofPattern("dd MMM yyyy, hh:mm a"));
            res.setIssueDateTime(formattedDateTime);
            
            
            res.setBookno(ib.getBooks().getBookno());
            res.setBookname(ib.getBooks().getBookname());
            res.setBookdesc(ib.getBooks().getBookdesc());
            res.setAuthor(ib.getBooks().getAuthor());
            res.setBookImage(ib.getBooks().getBookImage()); // ✅ Image set

            responses.add(res);
        }

        return responses;
    }
    
   public List<Books> getissuedbooks()
   {
	  return bookRepository.findAll();
   }
	
   //admin login form 
  
   public Optional<Admin> adminlogin(String adminpassword) {
	   
	   return adminLoginRepository.findByAdminpassword(adminpassword);
	   
	
}
   
   public List<StudentsDTO> getallstudents() {
	    List<Students> studentsList = repo.findAll();
	    List<StudentsDTO> studentDTOList = new ArrayList<>();

	    // Manually mapping each student to a StudentsDTO
	    for (Students student : studentsList) {
	        StudentsDTO studentsDTO = new StudentsDTO();
	        studentsDTO.setId(student.getId());
	        studentsDTO.setFirstname(student.getFirstname());
	        studentsDTO.setLastname(student.getLastname());
	        studentsDTO.setEmail(student.getEmail());
	        studentsDTO.setPassword(student.getPassword());
	        studentsDTO.setAddress(student.getAddress());
	        studentsDTO.setFieldofStudy(student.getFieldofStudy());

	        // ❗ Ye line bhool gaya tha tu
	        studentDTOList.add(studentsDTO);
	    }

	    return studentDTOList;
	}

}
