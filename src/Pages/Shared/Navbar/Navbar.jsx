import { Link, NavLink } from "react-router-dom";
import logo from '../../../../public/assets/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {

  const {logOut, user} = useContext(AuthContext)

  const handleLogout =()=> {
      logOut()
      .then(()=>{
        alert("sign out successfully")
      })
      .catch(error =>{
        console.log(error);
      })
  }

    const links = (
      <>
        <li>
          <NavLink to={"/"}>Home </NavLink>
        </li>

        <li>
          <NavLink to={"/blog"}>Blog</NavLink>
        </li>

        <li>
          <NavLink to={"/contact"}>Contact </NavLink>
        </li>

        {user?.email ? (
          <>
            <li>
              <NavLink to={"/bookings"}>My Booking</NavLink>
            </li>
            <li onClick={handleLogout}>
              <button>Logout</button>
            </li>
          </>
        ) : (
          <NavLink to={"/login"}>
            <li>
              <button>Login</button>
            </li>
          </NavLink>
        )}
      </>
    );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline text-[#FF3811]">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
