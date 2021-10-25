package com.revature.sarxrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.sarxrest.model.FlightTicket;

import com.revature.sarxrest.model.Customer;

@Repository
public interface FlightRepository extends JpaRepository<FlightTicket, Integer> {

	public FlightTicket findByCustomerId(int CustomerId);

}
