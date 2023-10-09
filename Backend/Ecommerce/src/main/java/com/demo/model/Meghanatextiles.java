package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Meghanatextiles {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cid;
	private String fname;
	private String mname;	
	private String lname;
	private String email;
	private String password;
	private String dpassword;
	private String location;
	public Meghanatextiles() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Meghanatextiles(int cid, String fname, String mname, String lname, String email, String password,
			String dpassword, String location) {
		super();
		this.cid = cid;
		this.fname = fname;
		this.mname = mname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.dpassword = dpassword;
		this.location = location;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getMname() {
		return mname;
	}
	public void setMname(String mname) {
		this.mname = mname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDpassword() {
		return dpassword;
	}
	public void setDpassword(String dpassword) {
		this.dpassword = dpassword;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	
	
	
	
}
