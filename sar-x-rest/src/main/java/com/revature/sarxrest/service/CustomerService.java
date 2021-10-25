package com.revature.sarxrest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.sarxrest.model.Customer;
import com.revature.sarxrest.repository.CustomerRepository;


@Service
public class CustomerService {
	@Autowired
	 private CustomerRepository customerRepository;
	public Customer saveCustomer(Customer customer) {
		 return  customerRepository.save(customer);
		
	}
	public Customer CheckEmail(String email) {
		return customerRepository.findByEmail(email);
		
	}
	public Customer CheckEmailAndPass(String email,String password) {
		return customerRepository.findByEmailAndPassword(email, password);
		
	}
	

}
