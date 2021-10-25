package com.revature.sarxrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.sarxrest.model.FlightTicket;
import com.revature.sarxrest.model.SpaceRoom;
import com.revature.sarxrest.service.SpaceRoomService;

@RestController
public class RoomBookingController {
	
	@Autowired
	private SpaceRoomService spaceRoomService;
	@PostMapping("/rooms")
	public  void postSpaceRoom(@RequestBody SpaceRoom spaceRoom) {
		spaceRoomService.addSpaceRoom(spaceRoom);
		
		
	}
	

	
	@DeleteMapping("/cancelRooms/{id}")
	public void CancelTicket(@PathVariable int id) {
		System.out.println(id);
		spaceRoomService.deleteRoom(id);
 	
	}
	
	@GetMapping("/spaceRoom/{customerId}")
	public List<SpaceRoom>  viewRoom(@PathVariable int customerId) {
		return (List<SpaceRoom>) spaceRoomService.viewSpaceRoom(customerId);
	}
		
	
	

}
