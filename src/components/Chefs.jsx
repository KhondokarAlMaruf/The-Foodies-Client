import React from "react";

const Chefs = ({ chef }) => {
  return (
    <div className="flex flex-row">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={chef.chefPicture} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {chef.chefName}</h2>
          <p>Years of experience: {chef.yearsOfExperience}</p>
          <p>Numbers of recipes : {chef.numberOfRecipes}</p>
          <p>Likes: {chef.likes}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-pink-300">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
