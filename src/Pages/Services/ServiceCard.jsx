import { Link } from "react-router-dom";

const serviceCard = ({ service }) => {
  const {_id, img, price, title } = service;
 
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[200px] w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-[#FF3811]">Price: ${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default serviceCard;
