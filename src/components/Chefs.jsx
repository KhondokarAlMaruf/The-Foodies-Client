import React from "react";
import { Link } from "react-router-dom";

const Chefs = ({ chef }) => {
  return (
    <div className="my-3">
      <div className="card card-compact  w-96 bg-base-100 shadow-xl border-4 border-pink-300">
        <figure>
          <img className="h-72" src={chef.chefPicture} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Name : {chef.chefName}</h2>
          <p>Years of experience: {chef.yearsOfExperience}</p>
          <p>Numbers of recipes : {chef.numberOfRecipes}</p>
          <p>Likes: {chef.likes}</p>
          <div className="card-actions justify-end">
            <Link to={`/chef-recipes/${chef.id}`}>
              <button className="btn bg-pink-300">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
