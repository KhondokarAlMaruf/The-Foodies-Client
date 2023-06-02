// import React from "react";
// import toast from "react-hot-toast";

import { useLoaderData } from "react-router-dom";
// import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ViewDetailsRecipes from "./ViewDetailsRecipes";

const ViewDetails = () => {
  const recp = useLoaderData();

  console.log(recp.recipes);
  return (
    <div>
      <div className="hero bg-base-200 rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 md:gap-14 justify-between items-center">
          <div>
            <img
              src={recp.chefPicture}
              className="w-full rounded-lg shadow-2xl"
              alt="fiveM Heist Cover"
            />
          </div>
          <div className="w-full lg:w-full">
            <ul className="font-barlow my-4 md:my-8 w-11/12 text-xl leading-loose">
              <li>Name : {recp.chefName}</li>
              <li>Years of experience: {recp.yearsOfExperience}</li>
              <li>Numbers of recipes : {recp.numberOfRecipes}</li>
              <li>Likes: {recp.likes}</li>
              <li>Description: {recp.bio}</li>
            </ul>

            <div className="mt-8 font-barlow"></div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {recp.recipes.map((recps, i) => (
          <ViewDetailsRecipes key={i} recps={recps}></ViewDetailsRecipes>
        ))}
      </div>
    </div>
  );
};

export default ViewDetails;
