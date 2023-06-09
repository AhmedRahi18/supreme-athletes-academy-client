import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const InstructorCard = ({topInstructor}) => {
  const { instructorName, instructorImage, ratings, details, availableSeats } = topInstructor;
    return (
        <div>
            <div className="card card-compact w-96 bg-gradient-to-r from-green-100 to-gray-100 shadow-xl">
        <figure>
          <img src={instructorImage} />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-serif font-semibold">{instructorName}</h2>
          <p className="text-gray-500 font-semibold">{details}</p>
          <div className="flex justify-between items-center mt-3">
            <p className="font-semibold text-lg">Available Seats: {availableSeats}</p>
            <Rating
              placeholderRating={ratings}
              emptySymbol={
                <FaRegStar className="text-yellow-400"></FaRegStar>
              }
              placeholderSymbol={
                <FaStar className="text-yellow-400"></FaStar>
              }
              fullSymbol={
                <FaStar></FaStar>
              }
            />
          </div>
        </div>
      </div>
        </div>
    );
};

export default InstructorCard;