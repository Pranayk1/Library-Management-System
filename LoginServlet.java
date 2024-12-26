package test;
import jakarta.servlet.annotation.*;
import jakarta.servlet.http.*;
import java.io.*;
import java.util.*;
import jakarta.servlet.*;


@WebServlet(/login)
@SuppressWarnings("serial")
public class LoginServlet extends HttpServlet
{
	protected void doPost(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
	{
		String un=req.getParameter("username");
		String pass=req.getParameter("password");
		

		SignUpBean sp=new SignUpBean();
		
		if(sp==null)
		{
			req.setAttribute("msg", "Invalid Login");
			req.getRequestDispatcher("msg.jsp").forward(req, res);
			
			
		}
		else
		{
			HttpSession hs=req.getSession();	//Retrieve or create a new session
			req.setAttribute("spbean",sp);		//Store UserBean in session
			
			req.getRequestDispatcher("L").forward(req, res);;
			
			
		}
		
		
		
		
	}

	
	
	
}
