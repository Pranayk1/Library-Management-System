package test;

import jakarta.servlet.*;
import jakarta.servlet.annotation.*;
import jakarta.servlet.http.*;
import java.io.*;
import java.sql.*;
import java.util.*;

@WebServlet("/viewStudents")
public class ViewStudents extends HttpServlet {

    // Database connection details
   

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException 
    {
        // Create an ArrayList to hold students
        ArrayList<SignUpBean> spb = new ArrayList<>();

        // SQL query to fetch student data
      

        // Fetch students from the database
        try 
        {
        	Connection con = DBConnection.getCon();
        	PreparedStatement ps1 = con.prepareStatement("select * from signup");
        	
        	ResultSet rs = ps1.executeQuery();

            while (rs.next()) 
            {
                // Create a new Student object for each row in the ResultSet
                SignUpBean spb = new SignUpBean();
                spb.setId(rs.getInt("id"));
                spb.setName(rs.getString("name"));
                spb.setEmail(rs.getString("email"));
                spb.setCourse(rs.getString("course"));

                // Add the Student object to the ArrayList
                spb.add(spb);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        // Set the ArrayList of students as a request attribute
        request.setAttribute("studentList", students);

        // Forward the request to the JSP for rendering  
        RequestDispatcher dispatcher = request.getRequestDispatcher("WEB-INF/jsp/viewStudents.jsp");
        dispatcher.forward(request, response);
    }
}
