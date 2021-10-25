package com.revature.sarxrest.service;

import java.util.List;

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
	public List<SpaceRoom> viewSpaceRoom(int customerId) {
		return (List<SpaceRoom>) roomRepo.findByCustomerId(customerId);
	}


}
