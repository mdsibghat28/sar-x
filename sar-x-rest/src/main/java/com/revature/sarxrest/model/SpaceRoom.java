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
	
	@Column(name="roomName")
	private String roomName;
	
	@Column(name="accomodate")
	private int accomodates;
	
	@Column(name="customer_id")
	private int customerId;
	
	@Column(name="check_out")
	private String checkOut;
	
	@Column(name="check_in")
	private String checkIn;
	
	@Column(name="name")
	private String name;
	
	public SpaceRoom(String name,String checkIn,String checkOut,int customerId,String roomName, int accomodates) {
		super();
		this.name=name;
		this.checkIn=checkIn;
		this.checkOut=checkOut;
		
		this.customerId=customerId;
		this.roomName = roomName;
		this.accomodates = accomodates;
		
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

	public String getCheckOut() {
		return checkOut;
	}

	public void setCheckOut(String checkOut) {
		this.checkOut = checkOut;
	}

	public String getCheckIn() {
		return checkIn;
	}

	public void setCheckIn(String checkIn) {
		this.checkIn = checkIn;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "SpaceRoom [roomId=" + roomId + ", roomName=" + roomName + ", accomodates=" + accomodates
				+ ", customerId=" + customerId + ", checkOut=" + checkOut + ", checkIn=" + checkIn + ", name=" + name
				+ "]";
	}

	

	
	
      
	
}
