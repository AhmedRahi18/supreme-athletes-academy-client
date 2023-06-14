const ManageClassesCard = ({ singleClass }) => {
  const {
    image,
    name,
    instructorName,
    instructorEmail,
    price,
    availableSeats,
    status,
  } = singleClass;
  return (
    <div>
      <div className="card w-96 bg-gradient-to-r from-green-200 to-gray-100  shadow-xl">
        <figure>
          <img
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold font-serif">{name}</h2>
          <p className=" text-lg font-semibold">Instructor Name: {instructorName} </p>
          <p className=" text-lg font-semibold">Instructor Email: {instructorEmail} </p>
          <p className=" text-lg font-semibold">Price: ${price}</p>
          <div className="flex justify-between items-center mt-3">
            <p className="font-semibold text-lg">Status: {status}</p>
            <p className="font-semibold text-lg">Available Seats: {availableSeats}</p>
          </div>
          <div className="card-actions mt-5 flex justify-between">
          <button className="btn border-none bg-gradient-to-r from-green-500 to-green-600 hover:scale-90 rounded px-5 py-1 text-white">
            Approve
          </button>
          <button className="btn border-none bg-gradient-to-r from-red-500 to-red-600 hover:scale-90 rounded px-5 py-1 text-white">
            Deny
          </button>
          <button className="btn border-none bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-90 rounded px-5 py-1 text-white">
            Feedback
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClassesCard;
