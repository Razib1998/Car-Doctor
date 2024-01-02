import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import img from "../../../public/assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Registration = () => {
 
    const {createUser} = useContext(AuthContext);

    const handleRegister  = (e)=> {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
           const user = result.user;
           console.log(user);
           if(user){
            Swal.fire({
              title: "Good job!",
              text: "User Created Successfully!",
              icon: "success",
            });
           }
        })
        .catch(error =>{
            console.error(error)
        })

    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center mr-12 w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center mt-4">Register!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  name="photo"
                  placeholder="Photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="text-center p-2 mb-2">
              Already Have an account ?
              <Link to={"/login"}>
                <button className="btn btn-active btn-link">
                  Login
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
