import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;

    const order = {
      customerName: name,
      email,
      date,
      service: _id,
      price,
    };

    console.log(order);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 gap-12">
      <h2 className="text-center text-2xl font-semibold">
        Book services: {title}
      </h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              defaultValue={user?.displayName}
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              name="amount"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <input
            className="btn btn-error btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
      {/* <div className="card-body"></div> */}
    </div>
  );
};

export default CheckOut;
