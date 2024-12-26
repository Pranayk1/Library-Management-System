<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
            <%@ page import="java.util.*,test.*"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<% 
ArrayList<SignUpBean> al = (ArrayList<SignUpBean>)session.getAttribute("alist");

out.println("Page Belongs to admin");

if(al.size()==0)
{
	out.println("emplyees not availabel");
}
else
{
	Iterator<SignUpBean>it=al.iterator();
	out.println("<table>");
	out.println("<th>Student Name</th>");
	out.println("<th>Student LastName</th>");
	out.println("<th>Email</th>");
	out.println("<th>Password</th>");
	out.println("<th>Field</th>");
	


	


	while(it.hasNext())
	{
		SignUpBean sp=(SignUpBean)it.next();
		
		out.println("<tr>");
     out.println("<td>" + sp.getFname() + "</td>");
        out.println("<td>" + sp.getLname() + "</td>");
        out.println("<td>" + sp.getEmail() + "</td>");
        out.println("<td>" +sp.getPassword() + "</td>");
        out.println("<td>" + sp.getField() + "</td>");
      
        
    
        
  

    
   // out.println("<td><a href='edit?eId="+eb.geteId()+"'> Edit</a> </td>");
      
      
     
        out.println("</tr>");
		
		
  
        //<a href="delete" eid=+eb.geteid()>Delete</a>
	}
	
	out.println("</table");
}
%>
</body>
</html>