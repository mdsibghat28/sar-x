package com.revature.sarxrest.service;

import java.util.List;

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

	}
}