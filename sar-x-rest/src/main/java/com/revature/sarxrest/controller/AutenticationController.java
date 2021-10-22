package com.revature.sarxrest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.sarxrest.model.Customer;
import com.revature.sarxrest.service.CustomerService;

@RestController
public class AutenticationController {
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/register")
	@CrossOrigin(origins = "http://localhost:4200")	
	public void registerCustomer(@RequestBody Customer customer) throws Exception {
		String tempEmail = customer.getEmail();
		if(tempEmail!=null && !"".equals(tempEmail)) {
			Customer obj = customerService.CheckEmail(tempEmail);
			if(obj != null) {
				throw new  Exception("User With This Email "+tempEmail+" Already Registered");
				
			}
			
		}
		Customer obj = null;
		obj=customerService.saveCustomer(customer);
		
		
		
	}
//	@GetMapping("/login")
//	public Customer logIn(@RequestBody Customer customer) throws Exception {
//		String tempEmail = customer.getEmail();
//		String tempPass = customer.getPassword();
//		Customer obj = null;
//		if(tempEmail != null && tempPass != null) {
//			obj = customerService.CheckEmailAndPass(tempEmail, tempPass);
//					}
//		if(obj == null) {
//			throw new Exception("InValid credentials");
//		}
//		return obj;
//		
//		
//		
//		
// }
	

}