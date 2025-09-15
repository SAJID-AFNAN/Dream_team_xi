import { BsPersonCircle } from "react-icons/bs";
import { FaFlag } from "react-icons/fa";

const Card = ({ user }) => {
  const { name, country, type, image, price } = user;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-5 pt-4">
          <img src={image} alt="Shoes" className="rounded-xl h-52 w-full" />
        </figure>
        <div className="card-body ">
          <div className="flex justify-start items-center gap-2">
            <BsPersonCircle className="text-xl" />
            <h2 className="card-title text-xl">{name}</h2>
          </div>
          <div className="flex justify-between items-center gap-2 text-gray-500 border-b border-gray-300 pb-4 ">
            <div className="flex justify-center items-center gap-4">
              <FaFlag />
              <h2 className="">{country}</h2>
            </div>
            <button className="bg-gray-200 px-3 py-1 rounded-lg text-gray-700">
              {type}
            </button>
          </div>
          <div>
            <h4 className="font-bold">Rating</h4>
          </div>
          <div className="flex justify-between items-center py-1">
            <h4 className="font-bold">Left-Hand-Bat</h4>
            <a href="">Left-Hand-Bat</a>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-bold">Price: ${price}</h4>
            <button className="btn border border-gray-300 font-normal rounded-lg">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
