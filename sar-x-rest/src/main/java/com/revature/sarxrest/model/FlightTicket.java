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

	@Column(name="price")
	private double price;
	@Column(name="customerId")
	private int customerId;
	
	public FlightTicket(String name, String date, String className, double price,int customerId) {

		super();
		this.customerId = customerId;
//		this.bookingId = bookingId;
		this.name = name;
		this.date = date;
		this.className = className;
		this.price = price;
		this.customerId = customerId;
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

	@Override
	public String toString() {
		return "FlightTicket [flightId=" + flightId + ", name=" + name + ", date=" + date + ", className=" + className
				+ ", price=" + price + ", customerId=" + customerId + "]";
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	


	




	

}
