package com.revature.sarxrest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="space_room")
public class SpaceRoom {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="spaceRoomId")
	private int roomId;

	@Column(name = "name")
	private String name;
	
	@Column(name = "check_in")
	private String checkIn;
	
	@Column(name = "check_out")
	private String checkOut;
	
	@Column(name="roomName")
	private String roomName;
	
	@Column(name="accomodate")
	private int accomodates;
	
	
	@Column(name="customer_id")
	private int customerId;
		
	public SpaceRoom(String name, String checkIn, String checkOut, String roomName, int accomodates, int customerId) {
		super();
		this.name = name;
		this.checkIn = checkIn;
		this.checkOut = checkOut;
		this.roomName = roomName;
		this.accomodates = accomodates;
		this.customerId = customerId;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getCheckIn() {
		return checkIn;
	}



	public void setCheckIn(String checkIn) {
		this.checkIn = checkIn;
	}



	public String getCheckOut() {
		return checkOut;
	}



	public void setCheckOut(String checkOut) {
		this.checkOut = checkOut;
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

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}



	@Override
	public String toString() {
		return "SpaceRoom [roomId=" + roomId + ", name=" + name + ", checkIn=" + checkIn + ", checkOut=" + checkOut
				+ ", roomName=" + roomName + ", accomodates=" + accomodates + ", customerId="
				+ customerId + "]";
	}


	
      
	
}
