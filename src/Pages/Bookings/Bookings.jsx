import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `https://car-doctor-server-ten-drab.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  // delete service data
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure want to delete this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-server-ten-drab.vercel.app/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your booking has been deleted.",
                "success"
              );
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to update this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-server-ten-drab.vercel.app/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "confirm" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire(
                "Updated!",
                "Your booking has been updated.",
                "success"
              );
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              const updated = bookings.find((booking) => booking._id === id);
              updated.status = "confirm";
              const newBookings = [updated, ...remaining];
              setBookings(newBookings);
            }
          });
      }
    });
  };

  return (
    <div>
      <h3 className="text-3xl font-semi-bold">
        Your Bookings: {bookings.length}
      </h3>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service Demo</th>
              <th>Service</th>
              <th>Coustomer Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
