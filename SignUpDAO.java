package test;
import java.sql.*;
import java.sql.PreparedStatement;

public class SignUpDAO 
{

	
	public int k=0;

	public int Signup(SignUpBean sp)
	{
		try
		{
			Connection con = DBConnection.getCon();
			PreparedStatement ps=con.prepareStatement("insert into signup values(?,?,?,?,?)");
			
			
			ps.setString(1, sp.getFname());
			ps.setString(2, sp.getLname());
			ps.setString(3, sp.getEmail());
			ps.setString(4, sp.getPassword());
			ps.setString(5, sp.getField());



			
			k=ps.executeUpdate();
		
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return k;
		
	}
		
		
		
}

	
	

