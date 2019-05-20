import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/get")
public class Name extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String name = new String();
        name = request.getParameter("name");
        if(name.length() <= 100){
            response.getOutputStream().print("<div>Name is " + name + "</div>");
        }
        else{
            response.getOutputStream().print("<div>Too long Name</div>");
        }
    }
}

