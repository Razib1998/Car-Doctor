import { Link, useLoaderData } from "react-router-dom";
import FacilityCard from "./FacilityCard";

const ServiceDetails = () => {
  const { _id, facility,  title ,img, price } = useLoaderData();

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}!</h2>
          <p>Price: $ {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/form/${_id}`}>
              <button className="btn btn-primary">Check Out</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {facility?.map((item, index) => (
          <FacilityCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
