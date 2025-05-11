package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table
@Entity
public class Books {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
private	int bid;
	
	@Column
private	String bookno;
	
	@Column

private	String bookname;
	
	@Column
	private String author;
	@Column

 private String bookdesc;
	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] bookImage;
	
	@Column
	private Integer copies;
	
	
	
}
