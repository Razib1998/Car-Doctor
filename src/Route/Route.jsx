import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Shared/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

const myRouter = createBrowserRouter([
    {
       path:"/",
       element:<MainLayOut></MainLayOut>,
       children:[
        {
            path:"/",
            element:<Home></Home>

        },
        
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
           path:"/login",
           element:<Login></Login> 
        },
        {
            path:"/register",
            element:<Registration></Registration>
        }
       ]
    }
])

export default myRouter;