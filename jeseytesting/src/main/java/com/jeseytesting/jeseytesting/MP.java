package com.jeseytesting.jeseytesting;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.nio.file.Paths;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

@WebServlet("/upload")
@MultipartConfig
public class MP extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    
		String description = request.getParameter("description"); // Retrieves <input type="text" name="description">
	    
		System.out.println("This is "+description);
	    
	    Part filePart = request.getPart("file"); // Retrieves <input type="file" name="file">
	    String fileName = Paths.get(filePart.getSubmittedFileName()).getFileName().toString(); // MSIE fix.
	    InputStream fileContent = filePart.getInputStream();
	    
	    OutputStream outputStream =   new FileOutputStream(new File("c:/fakepath/"+fileName));
	    
	    int read = 0;
		byte[] bytes = new byte[1024];

		while ((read = fileContent.read(bytes)) != -1) {
			outputStream.write(bytes, 0, read);
			System.out.println(bytes);
			
		}

		System.out.println("Done!");
	    
	    System.out.println(fileName);
	    System.out.println(fileContent);
	    //String fileName = getSubmittedFileName(filePart);
	    
	    response.setContentType("application/json");
	    String jsonObject = "{status:202,message:'File Uploaded'}";
	    PrintWriter out = response.getWriter();
	 // Assuming your json object is **jsonObject**, perform the following, it will return your json object  
		 out.print(jsonObject);
		 out.flush();
	    
	}
}