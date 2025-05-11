package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Books;

public interface BookRepository extends JpaRepository<Books, Integer>
{
	Optional<Books> findByBookno(String bookno);

	Books save(String bookno);

	void deleteByBookno(String bookno);

}
