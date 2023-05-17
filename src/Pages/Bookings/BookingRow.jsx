const BookingRow = ({ booking }) => {
  const { customerName, service, price, img } = booking;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
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
    </tr>
  );
};

export default BookingRow;