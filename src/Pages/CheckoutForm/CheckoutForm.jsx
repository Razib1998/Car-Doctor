import { useLoaderData } from "react-router-dom";

const CheckoutForm = () => {
  const { title, img } = useLoaderData();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    const order = {
      firstName,
      lastName,
      phone,
      email,
      img,
      message,
    };

    console.log(order);
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
                    placeholder="email"
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
