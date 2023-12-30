import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";



const MainLayOut = () => {
    return (
      <div className="w-[1300px] mx-auto">
        <Navbar></Navbar>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayOut;