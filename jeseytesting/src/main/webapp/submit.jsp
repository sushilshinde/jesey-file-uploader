<%@page import="java.util.Enumeration"%>
<%

System.out.println("---------------------------------------------------------");
Enumeration headerNames = request.getHeaderNames();
while(headerNames.hasMoreElements()) {
  String headerName = (String)headerNames.nextElement();
  System.out.println("Header Name - " + headerName + ", Value - " + request.getHeader(headerName));
}
System.out.println("---------------------------------------------------------");

Enumeration params = request.getParameterNames(); 
while(params.hasMoreElements()){
 String paramName = (String)params.nextElement();
 System.out.println("Parameter Name - "+paramName+", Value - "+request.getParameter(paramName));
}


%>