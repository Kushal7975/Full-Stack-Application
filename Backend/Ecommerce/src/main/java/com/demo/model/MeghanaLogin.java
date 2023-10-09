package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MeghanaLogin {

	@Id
	private String eid;
	private String pswd;
	public MeghanaLogin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MeghanaLogin(String eid, String pswd) {
		super();
		this.eid = eid;
		this.pswd = pswd;
	}
	public String getEid() {
		return eid;
	}
	public void setEid(String eid) {
		this.eid = eid;
	}
	public String getPswd() {
		return pswd;
	}
	public void setPswd(String pswd) {
		this.pswd = pswd;
	}
	
	
}
