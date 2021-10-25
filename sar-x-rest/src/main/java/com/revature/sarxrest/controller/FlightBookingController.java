package com.revature.sarxrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.sarxrest.model.FlightTicket;
import com.revature.sarxrest.service.FlightService;

@RestController
public class FlightBookingController {

	@Autowired
	private FlightService flightservice;

	@PostMapping("/bookings")
	public void postTickets(@RequestBody FlightTicket flightTicket) {
		flightservice.saveTicketBooking(flightTicket);

	}

	@GetMapping("/tickets/{customerId}")
	public FlightTicket viewBooking(@PathVariable int customerId) {
		return flightservice.getTicket(customerId);

	}

	@DeleteMapping("canceltcks/{id}")

	public void CancelTicket(@PathVariable int id) {
		System.out.println(id);
		flightservice.deleteTicket(id);

	}

}
