package test;
import jakarta.servlet.http.*;
import jakarta.servlet.*;
import java.io.*;
import jakarta.servlet.annotation.*;


@WebServlet("/signup")
@SuppressWarnings("serial")
public class SignUpServlet extends HttpServlet
{
	protected void doPost(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
	{
		SignUpBean sp = new SignUpBean();
		
		sp.setFname(req.getParameter("fname"));
		sp.setLname(req.getParameter("lname"));
		sp.setEmail(req.getParameter("email"));
		sp.setPassword(req.getParameter("password"));
		sp.setField(req.getParameter("field"));
		
		 int k= new SignUpDAO().Signup(sp);
		 
		 if(k>0)
		 {
			 req.setAttribute("msg", "Registration done Successfully");
			 req.getRequestDispatcher("Signup.jsp").forward(req,res);
		 }
		
		
		
	}
	
	
	
}
