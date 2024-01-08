/* eslint-disable no-undef */

/* eslint-disable react/prop-types */
const BookingsCard = ({ booking, handleDelete }) => {
  const {_id, firstName, img, title, price } = booking;

  return (
    <tr>
      <td>
        <div className="avatar">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle mt-6 mr-6"
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
          <div className="mask rounded-full w-24 h-24">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td className="text-lg font-bold">{title}</td>
      <td className="text-lg text-red-500">{firstName}</td>
      <td>${price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingsCard;
