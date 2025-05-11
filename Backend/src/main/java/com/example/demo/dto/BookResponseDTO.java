package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookResponseDTO {

	 private String bookno;
	    private String bookname;
	    private String Author;
	    private String bookdesc;
	    private byte[] bookImage;
	
}
