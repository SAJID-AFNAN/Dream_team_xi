import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="pt-24 pb-40">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Available Players</h2>
        <div className="border border-gray-300 rounded-lg font-medium">
          <button className="bg-[#E7FE29] px-4 py-2">Available</button>
          <button className="px-4 py-2">Select(0)</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-4">
        {data.map((user, idx) => (
          <Card key={idx} user={user}></Card>
        ))}
      </div>
    </div>
  );
};

export default Main;
