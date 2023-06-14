import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const PopularCard = ({ topClass }) => {
  const { name, image, ratings, price, details, enrolled } = topClass;
  return (
    <div>
      <div className="card card-compact w-96 bg-gradient-to-r from-green-100 to-gray-100 shadow-xl">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-serif font-semibold">{name}</h2>
          <p className="text-gray-500 font-semibold">{details}</p>
          <div className="flex justify-between items-center mt-3">
            <p className="font-semibold text-lg">Price: ${price}</p>
            <p className="font-semibold text-lg">Enrolled: {enrolled}</p>
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

export default PopularCard;
