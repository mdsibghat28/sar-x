package com.revature.sarxrest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.sarxrest.model.FlightTicket;
import com.revature.sarxrest.model.SpaceRoom;
import com.revature.sarxrest.repository.SpaceRoomRepository;

@Service
public class SpaceRoomService {
	
	@Autowired
	private SpaceRoomRepository roomRepo;
	
	
	public SpaceRoom addSpaceRoom(SpaceRoom spaceRoom) {
		
	   return roomRepo.save(spaceRoom);
		
	}

	public void deleteRoom(int id) {
		System.out.println("service"+ id);
		roomRepo.deleteById(id);
		
	}
	public SpaceRoom viewSpaceRoom(int customerId) {
		return roomRepo.findByCustomerId(customerId);
	}


}
