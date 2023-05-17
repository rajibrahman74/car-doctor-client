const BookingRow = ({ booking, handleDelete, handleUpdate }) => {
  const { _id, customerName, date, service, price, img, status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline btn-error"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-20 h-20">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{customerName}</td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
        {status === "confirm" ? (
          <span
            className="font-bold text-pri
"
          >
            Approved
          </span>
        ) : (
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please approve
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;