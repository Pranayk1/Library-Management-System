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
public class StudentsDTO 
{
	
private int id;
	
	private String firstname;
	
	private String lastname;
	
	private String email;
	
	private String password;
	
	private String address;
	
	private String fieldofStudy;
}
