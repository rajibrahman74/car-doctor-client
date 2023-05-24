import { useEffect, useRef, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true); // price low hight state
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc, search]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };
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
        <div className="flex items-center justify-center gap-10 my-3">
          <div className="form-control">
            <div className="input-group">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button onClick={handleSearch} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => setAsc(!asc)}
              className="btn btn-secondary text-white flex justify-center items-center mx-auto my-4"
            >
              {asc ? "Price High to low" : "Price Low to hight"}
            </button>
          </div>
        </div>
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
