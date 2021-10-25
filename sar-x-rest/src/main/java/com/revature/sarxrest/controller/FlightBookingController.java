package com.revature.sarxrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.sarxrest.model.FlightTicket;
import com.revature.sarxrest.service.FlightService;
@RestController
public class FlightBookingController {
@Autowired
private  FlightService flightservice;
@GetMapping("/tickets")
@CrossOrigin(origins = "http://localhost:4200")
public List<FlightTicket> flightTickets(@RequestBody FlightTicket flighTicket) {
	List<FlightTicket> object = null;
	object =flightservice.list();
	return object;
	
}

}
