package com.revature.sarxrest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.sarxrest.model.FlightTicket;
import com.revature.sarxrest.model.SpaceRoom;
@Repository
public interface SpaceRoomRepository extends JpaRepository<SpaceRoom , Integer>{
	
    public List<SpaceRoom> findByCustomerId(int customerId);
	

}
