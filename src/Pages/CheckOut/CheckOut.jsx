import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 gap-12">
      <h2>Book services: {service.title}</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <input className="btn btn-error btn-block" type="submit" value="Order Confirm" />
        </div>
      </form>
      {/* <div className="card-body"></div> */}
    </div>
  );
};

export default CheckOut;
