import { useContext, useState } from "react";
import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckoutForm = () => {
  const { title, img, price } = useLoaderData();
  const [selectedValue, setSelectedValue] = useState();
  const {user} = useContext(AuthContext);


  const handleSelectedValue = (e) => {
    setSelectedValue(e.target.value);
  };
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = user?.email;
    const color = form.color.value;
    const size = selectedValue;
    const message = form.message.value;

    const booking = {
      firstName,
      lastName,
      phone,
      size,
      color,
      price,
      email,
      title,
      img,
      message,
    };

    

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(booking)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
        }
        form.reset();
      })
  };
  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-8 p-4">
        Booking For: <span className="text-red-500">{title}</span>{" "}
      </h2>
      <div className="hero p-4  bg-base-200">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-6 justify-around ">
            <div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="first ame"
                    className="input input-bordered w-[400px] "
                  />
                </label>
              </div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Phone</span>
                  </div>
                  <input
                    type="number"
                    name="phone"
                    placeholder="phone"
                    className="input input-bordered w-[400px] "
                  />
                </label>
              </div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Size</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    value={selectedValue}
                    onChange={handleSelectedValue}
                  >
                    <option>
                      what is the car Size?
                    </option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </label>
              </div>
            </div>

            <div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="last name"
                    className="input input-bordered w-[400px] "
                  />
                </label>
              </div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Email</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    placeholder="email"
                    className="input input-bordered w-[400px] "
                  />
                </label>
              </div>
              <div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Color</span>
                  </div>
                  <input
                    type="text"
                    name="color"
                    placeholder="color"
                    className="input input-bordered w-[400px] "
                  />
                </label>
              </div>
            </div>
          </div>
          <textarea
            className="textarea textarea-bordered w-full mt-8"
            type="text"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <input
            className="w-full mt-8  btn btn-success"
            type="submit"
            value="Order Confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
