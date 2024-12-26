package test;
import java.io.*;

@SuppressWarnings("serial")
public class SignUpBean implements Serializable
{
	private String fname,lname,email,password,field;
	
	public SignUpBean()
	{}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
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

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	};
	
	
	

	
	
	
}
