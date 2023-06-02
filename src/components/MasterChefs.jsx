import React, { useEffect, useState } from "react";
import Chefs from "./Chefs";
import { useNavigation } from "react-router-dom";
import Spinner from "./Spinner";

const MasterChefs = () => {
  const navigation = useNavigation();

  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefdata")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {navigation.state === "loading" && "loading........."}

      <h2 className="text-4xl md:text-6xl font-semibold font-teko text-fuchsia-900 leading-relaxed text-center my-10">
        Master Chefs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2">
        {chefs.length > 0 ? (
          chefs.map((chef) => <Chefs key={chef.id} chef={chef}></Chefs>)
        ) : (
          // <div className="text-3xl my-24 text-center">
          //   <progress className="progress w-56"></progress>
          // </div>
          <Spinner></Spinner>
        )}
      </div>
    </div>
  );
};

export default MasterChefs;
