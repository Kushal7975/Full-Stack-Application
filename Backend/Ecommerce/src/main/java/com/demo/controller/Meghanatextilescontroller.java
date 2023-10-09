package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.MeghanaLogin;
import com.demo.model.Meghanatextiles;
import com.demo.repository.MeghanaRepository;
import com.demo.repository.Meghanatextilesrepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Meghanatextilescontroller {

	@Autowired
	private Meghanatextilesrepository mrepo;
	
	@Autowired
	private MeghanaRepository lrepo;

	
	//services	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/account")
	public ResponseEntity login(@RequestBody MeghanaLogin l1)
	{
		MeghanaLogin l3 = l1;
		
		String newid = l3.getEid();
		String newpswd = l3.getPswd();
		
		MeghanaLogin l4 = lrepo.getOne(newid);
		boolean flag = lrepo.existsById(newid);
		if(flag)
		{
			if(newpswd.equals(l4.getPswd()))
				return ResponseEntity.ok(l3);
		}
		return (ResponseEntity<MeghanaLogin>) ResponseEntity.internalServerError();
		
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/register")
	public String insert(@RequestBody Meghanatextiles p)
	{
		this.mrepo.save(p);
		return "registration successful";
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/update")
	public Meghanatextiles update(@RequestBody Meghanatextiles m)
	{
		return this.mrepo.save(m);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/view")
	public List<Meghanatextiles> view()
	{
		return this.mrepo.findAll();
	}
	
}
