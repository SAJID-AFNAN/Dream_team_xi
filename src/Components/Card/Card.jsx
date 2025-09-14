import { BsPersonCircle } from "react-icons/bs";
import { FaFlag } from "react-icons/fa";

const Card = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-5 pt-4">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <div className="flex justify-start items-center gap-2">
            <BsPersonCircle className="text-xl" />
            <h2 className="card-title text-xl">Miraj</h2>
          </div>
          <div className="flex justify-between items-center gap-2 text-gray-500 border-b border-gray-300 pb-4 ">
            <div className="flex justify-center items-center gap-4">
              <FaFlag />
              <h2 className="">India</h2>
            </div>
            <button className="bg-gray-200 px-3 py-1 rounded-lg text-gray-700">
              All rounder
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
            <h4 className="font-bold">Price: $1500000</h4>
            <button className="btn border border-gray-300 font-normal rounded-lg">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
