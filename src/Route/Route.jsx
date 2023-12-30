import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Shared/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

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
            path:"/about",
            element:<About></About>
        },
        {
            path:"/services",
            element: <Services></Services>
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        }
       ]
    }
])

export default myRouter;