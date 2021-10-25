package com.revature.sarxrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.revature.sarxrest.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	 public Customer findByEmail(String email);
	
	public Customer findByEmailAndPassword(String email, String password);

}			