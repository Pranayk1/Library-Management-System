package test;

import java.io.*;





import jakarta.servlet.*;
import jakarta.servlet.annotation.*;
import jakarta.servlet.http.*;

@SuppressWarnings("serial")
@WebServlet("/admin-form")
public class AdminServlet extends HttpServlet
{

	protected void doPost(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException
	{
		String uN=req.getParameter("username");
		String pW=req.getParameter("password");
		
		AdminBean ab = new AdminLoginDAO().login(uN,pW);
		
		if(ab==null)
		{
			req.setAttribute("msg1","Invalid ");
			req.getRequestDispatcher("msg1.jsp").forward(req, res);
		}
		else
		{
			HttpSession hs = req.getSession();
			hs.setAttribute("abean", ab);
			req.getRequestDispatcher("admin-dash.html").forward(req, res);
			
		}
		
	}
}
