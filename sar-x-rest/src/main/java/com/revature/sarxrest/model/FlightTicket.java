package com.revature.sarxrest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;




@Entity
@Table(name="flight_ticket")

public class FlightTicket {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="flightId")
	private int flightId;
	@Column(name="name")
	private String name;
	@Column(name="date")
	private String date;
	@Column(name="className")
	private String className;

	@Column(name="customerId")
	private int customerId;
	
	@Column(name="passenger_name")
	private String passenger_name;
	@Column(name="passengers")
	private int passengers;
	@Column(name="source")
	private String source;
	@Column(name="destination")
	private String destination;
	

	
	public FlightTicket(String name, String date, String className, int customerId, String passenger_name,
			int passengers, String source, String destination) {
		super();
		this.name = name;
		this.date = date;
		this.className = className;
		this.customerId = customerId;
		this.passenger_name = passenger_name;
		this.passengers = passengers;
		this.source = source;
		this.destination = destination;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public FlightTicket() {}

	public int getFlightId() {
		return flightId;
	}
	

//	public int getBookingId() {
//		return bookingId;
//	}
//
//	public void setBookingId(int bookingId) {
//		this.bookingId = bookingId;
//	}

	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public String getPassenger_name() {
		return passenger_name;
	}

	public void setPassenger_name(String passenger_name) {
		this.passenger_name = passenger_name;
	}

	public int getPassengers() {
		return passengers;
	}

	public void setPassengers(int passengers) {
		this.passengers = passengers;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	@Override
	public String toString() {
		return "FlightTicket [name=" + name + ", date=" + date + ", className=" + className + ", customerId="
				+ customerId + ", passenger_name=" + passenger_name + ", passengers=" + passengers + ", source="
				+ source + ", destination=" + destination + "]";
	}



	


	




	

}
