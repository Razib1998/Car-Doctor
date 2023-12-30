
import img from '../../../public/assets/images/login/login.svg'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center mt-4">Login!</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center">Or Sign In With</p>
            <div className="flex justify-center gap-4 items-center mt-6">
              <div className="text-2xl  p-2 rounded-full bg-base-200">
                <FaFacebook></FaFacebook>
              </div>
              <div className="text-xl  p-2 rounded-full bg-base-200">
                <FaGoogle></FaGoogle>
              </div>
            </div>
            <p className='text-center p-2 mb-2'>
              New Here ? 
              <Link to={"/register"}>
                <button className="btn btn-active btn-link">
                  Registration Now
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
