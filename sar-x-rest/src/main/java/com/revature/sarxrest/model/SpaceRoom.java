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
	
	@Column(name="cost")
	private double cost;
	
	@Column(name="customer_id")
	private int customerId;
	
	public SpaceRoom(int customerId,String roomName, int accomodates, double cost) {
		super();
		this.customerId=customerId;
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

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	@Override
	public String toString() {
		return "SpaceRoom [roomId=" + roomId + ", roomName=" + roomName + ", accomodates=" + accomodates + ", cost="
				+ cost + ", customerId=" + customerId + "]";
	}
	
      
	
}
