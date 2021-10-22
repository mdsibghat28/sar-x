package com.revature.sarxrest.model;

public class FlightTicket {
	
	private int flightId;
	private String name;
	private String date;
	private String className;
	private double price;
	
	public FlightTicket(String name, String date, String className, double price) {
		super();
		this.name = name;
		this.date = date;
		this.className = className;
		this.price = price;
	}
	
	public FlightTicket() {}

	public int getFlightId() {
		return flightId;
	}

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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Flight Id = " + flightId + ", Name = " + name + ", Date = " + date + ", Class Name = " + className
				+ ", Price = " + price;
	}
	
	

}
