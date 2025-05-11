package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class IssuedBookResponse {
	 private String studentname;
	    private String studentemail;
	    private String issueDateTime;  
	    private String bookno;
	    private String bookname;
	    private String bookdesc;
	    private String author;
	    private byte[] bookImage; // <-- Add this line

}
