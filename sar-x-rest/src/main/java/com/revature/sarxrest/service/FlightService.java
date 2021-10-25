package com.revature.sarxrest.service;

import java.util.List;
<<<<<<< HEAD
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.sarxrest.model.Customer;
import com.revature.sarxrest.model.FlightTicket;
import com.revature.sarxrest.repository.FlightRepository;

@Service
public class FlightService {
	
	
	@Autowired
	private FlightRepository flightrepo;
	
	public FlightTicket getTicket(int customerId) {
		 return flightrepo.findByCustomerId(customerId);
		
	}		
	
	public FlightTicket saveTicketBooking(FlightTicket ticket){
		 return flightrepo.save(ticket);
		
	}
	
	public void deleteTicket(int id) {
		System.out.println("service"+ id);
		 flightrepo.deleteById(id);
		
	}
=======

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.sarxrest.model.FlightTicket;
import com.revature.sarxrest.repository.FlightRepository;

public class FlightService {
	private static final Logger LOGGER = LoggerFactory.getLogger(FlightService.class);

	@Autowired
	private FlightRepository flightRepository;

	public List<FlightTicket> list() {
		LOGGER.info("Start");
		return flightRepository.findAll();
>>>>>>> view-bookings

	}
}