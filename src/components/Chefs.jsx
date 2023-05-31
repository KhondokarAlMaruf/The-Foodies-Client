import React from "react";

const Chefs = ({ chef }) => {
  console.log(chef);
  return (
    <div>
      <h2>{chef.chefName}</h2>
    </div>
  );
};

export default Chefs;
