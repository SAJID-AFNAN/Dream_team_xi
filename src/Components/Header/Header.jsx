import image from "../../assets/images/bg-shadow.png";
import banner from "../../assets/images/banner-main.png";
import { useState } from "react";

const Header = ({ setAddCoin }) => {
  const [sum, setSum] = useState(0);
  const handleAddCoin = () => {
    const newSum = sum + 1700000
    setSum(newSum)
    console.log(newSum);
    setAddCoin(newSum);
  };

  return (
    <div>
      <div
        className="p-4 mt-6 bg-[#131313] bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex flex-col justify-center items-center text-white py-12">
          <img className="pb-6" src={banner} alt="" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>

          <p className="text-xl md:text-2xl font-semibold mb-4 text-gray-400">
            Beyond Boundaries Beyond Limits
          </p>

          <div className="border border-yellow-400 px-1 py-1 rounded-lg">
            <button
              onClick={() => handleAddCoin()}
              className="btn bg-[#E7FE29] px-4 py-2 rounded-lg text-black font-medium border  "
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
