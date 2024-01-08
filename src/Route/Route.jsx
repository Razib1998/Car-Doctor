import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Shared/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/ServiceCard/ServiceDetails";
import CheckoutForm from "../Pages/CheckoutForm/CheckoutForm";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";


const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
      {
        path: "/form/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
        element: <CheckoutForm></CheckoutForm>,
      },
    ],
  },
]);

export default myRouter;