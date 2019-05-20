import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/check")
public class Check extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Boolean sucess = true;
        JSONObject object = new JSONObject();
        try {
            object.put("sucess", sucess);
            object.put("fail", !sucess);
        }
        catch (JSONException e) {
            e.printStackTrace();
        }
        response.getOutputStream().print("<div'>" + object + "</div>");
    }
}