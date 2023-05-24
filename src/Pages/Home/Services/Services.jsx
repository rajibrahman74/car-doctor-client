import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);  // price low hight state
  useEffect(() => {
    fetch(`http://localhost:5000/services?sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc]);
  return (
    <div>
      <div>
        <h3 className="font-extrabold text-xl text-error text-center">
          About Us
        </h3>
        <h1 className="text-5xl font-extrabold text-center">
          Our Service Area
        </h1>
        <p className="text-center mx-72 pt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
        <button
          onClick={() => setAsc(!asc)}
          className="btn btn-secondary text-white flex justify-center items-center mx-auto my-4"
        >
          {asc ? "Price High to low" : "Price Low to hight"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
