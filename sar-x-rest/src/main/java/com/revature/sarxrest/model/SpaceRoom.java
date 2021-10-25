package com.revature.sarxrest.model;

import javax.persistence.Entity;
import javax.persistence.Table;

public class SpaceRoom {
	
	private int roomId;
	private String roomName;
	private int accomodates;
	private double cost;
	
	public SpaceRoom(String roomName, int accomodates, double cost) {
		super();
		this.roomName = roomName;
		this.accomodates = accomodates;
		this.cost = cost;
	}
	
	public SpaceRoom() {}

	public int getRoomId() {
		return roomId;
	}

	public void setRoomId(int roomId) {
		this.roomId = roomId;
	}

	public String getRoomName() {
		return roomName;
	}

	public void setRoomName(String roomName) {
		this.roomName = roomName;
	}

	public int getAccomodates() {
		return accomodates;
	}

	public void setAccomodates(int accomodates) {
		this.accomodates = accomodates;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	@Override
	public String toString() {
		return "Room Id = " + roomId + ", Room Name = " + roomName + ", Accomodates = " + accomodates + ", Cost = "
				+ cost;
	}
	
	 

}
