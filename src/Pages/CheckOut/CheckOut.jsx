import Swal from "sweetalert2";
// import Swal from "sweetalert2/dist/sweetalert2.js";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const CheckOut = () => {
  const service = useLoaderData();
  // console.log(service);
  const { _id, title, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;

    const booking = {
      customerName: name,
      email,
      date,
      service_id: _id,
      service: title,
      price,
      img,
    };

    console.log(booking);

    fetch("https://car-doctor-server-ten-drab.vercel.app/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your booking request send successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
    </div>
  );
};

export default CheckOut;
