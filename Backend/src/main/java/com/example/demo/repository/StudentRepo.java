package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Students;

public interface StudentRepo extends JpaRepository<Students, Integer> {

	Students findByEmail(String email);
	
}
