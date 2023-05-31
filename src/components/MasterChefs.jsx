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
      <h2>Master Chefs</h2>
      {chefs.map((chef) => (
        <Chefs key={chef.id} chef={chef}></Chefs>
      ))}
    </div>
  );
};

export default MasterChefs;
