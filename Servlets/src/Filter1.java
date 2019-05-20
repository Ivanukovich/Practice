import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException; 

@WebFilter(urlPatterns = {"/", "/status", "/get", "/check", "/page", "/test1", "/test2"})
public class Filter1 implements Filter {
    @Override
    public  void init(FilterConfig item){}
    @Override
    public  void destroy(){}
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest requestOne = (HttpServletRequest)request;
        String method = requestOne.getMethod();
        String url = requestOne.getRequestURL().toString();
        long time = System.currentTimeMillis();
        chain.doFilter(request, response);
        time = System.currentTimeMillis() - time;
        System.out.println(method + " - " + url + " - " + time + "ms");
    }
}