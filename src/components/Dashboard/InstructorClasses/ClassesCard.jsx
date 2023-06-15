import { Link } from "react-router-dom";

const ClassesCard = ({ instructorClass }) => {
  const { image, name, price, status, enrolled , _id} = instructorClass;
  return (
    <div>
        <div className="card card-compact w-96 bg-gradient-to-r from-green-100 to-gray-100 shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-serif font-semibold">{name}</h2>
          <p className="text-gray-500 text-lg font-semibold">Price: ${price}</p>
          <div className="flex justify-between items-center mt-3">
            <p className="font-semibold text-lg">Status: {status}</p>
            <p className="font-semibold text-lg">Enrolled: {enrolled}</p>
          </div>
          {
            status === 'pending' || status === 'approved' ? '' : <div className="w-full max-h-40 overflow-y-auto">
            <p className="whitespace-pre-wrap break-words text-md font-semibold text-gray-600">Feedback: We don't allow this game in our academy</p>
          </div>
          }
            <Link to={`/dashboard/updateClass/${_id}`}>
            <button className="btn border-none bg-gradient-to-r from-green-500 to-green-600 hover:scale-90 rounded px-5 py-1 text-white">
            UPDATE
          </button>
            </Link>
          </div>
        </div>
      </div>
  );
};


export default ClassesCard;
