package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Admin;
import java.util.List;


public interface AdminLoginRepository extends JpaRepository<Admin, Integer> {

	Optional<Admin>findByAdminpassword(String adminpassword);
	
}
