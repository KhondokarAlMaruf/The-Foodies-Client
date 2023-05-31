import React, { useEffect, useState } from "react";
import Chefs from "./Chefs";

const MasterChefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefdata")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h2 className="text-4xl md:text-6xl font-semibold font-teko text-fuchsia-900 leading-relaxed text-center my-10">
        Master Chefs
      </h2>
      <div className="grid grid-cols-3 grid-rows-2 ">
        {chefs.map((chef) => (
          <Chefs key={chef.id} chef={chef}></Chefs>
        ))}
      </div>
    </div>
  );
};

export default MasterChefs;
