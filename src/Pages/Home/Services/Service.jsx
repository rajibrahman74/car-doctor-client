import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title me-auto">{title}</h2>
        <p className="text-error font-semibold me-auto">Price: ${price}</p>
        <div className="card-actions ms-auto">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-secondary text-white">Book now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;