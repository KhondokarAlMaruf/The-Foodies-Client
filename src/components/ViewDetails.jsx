import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ViewDetails = () => {
  const recp = useLoaderData();

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
      <div className="grid grid-cols-3 ">
        <div className="card w-96 bg-base-100 shadow-xl border-8 border-pink-300 ms-10">
          <figure>
            <img src={recp.recipes[0].recipeImage} />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{recp.recipes[0].recipeName}</h2>
            <ul>
              <h2>Ingredients: </h2>
              <li>{recp.recipes[0].ingredients[0]}</li>
              <li>{recp.recipes[0].ingredients[1]}</li>
              <li>{recp.recipes[0].ingredients[2]}</li>
              <li>{recp.recipes[0].ingredients[3]}</li>
              <li>{recp.recipes[0].ingredients[4]}</li>
            </ul>
            <p>CookingMethod: {recp.recipes[0].cookingMethod}</p>
            <Rating
              style={{ maxWidth: 200 }}
              value={recp.recipes[0].rating}
              readOnly
            />
            <div className="card-actions justify-end">
              <button className="btn bg-pink-300">Favorite</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl border-8 border-pink-300">
          <figure>
            <img src={recp.recipes[1].recipeImage} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recp.recipes[1].recipeName}</h2>
            <ul>
              <h2>Ingredients: </h2>
              <li>{recp.recipes[1].ingredients[0]}</li>
              <li>{recp.recipes[1].ingredients[1]}</li>
              <li>{recp.recipes[1].ingredients[2]}</li>
              <li>{recp.recipes[1].ingredients[3]}</li>
              <li>{recp.recipes[1].ingredients[4]}</li>
            </ul>
            <p>CookingMethod: {recp.recipes[1].cookingMethod}</p>
            <Rating
              style={{ maxWidth: 200 }}
              value={recp.recipes[1].rating}
              readOnly
            />
            <div className="card-actions justify-end">
              <button className="btn bg-pink-300">Favorite</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl border-8 border-pink-300">
          <figure>
            <img src={recp.recipes[2].recipeImage} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recp.recipes[2].recipeName}</h2>
            <ul>
              <h2>Ingredients: </h2>
              <li>{recp.recipes[2].ingredients[0]}</li>
              <li>{recp.recipes[2].ingredients[1]}</li>
              <li>{recp.recipes[2].ingredients[2]}</li>
              <li>{recp.recipes[2].ingredients[3]}</li>
              <li>{recp.recipes[2].ingredients[4]}</li>
            </ul>
            <p>CookingMethod: {recp.recipes[2].cookingMethod}</p>
            <Rating
              style={{ maxWidth: 200 }}
              value={recp.recipes[2].rating}
              readOnly
            />
            <div className="card-actions justify-end">
              <button className="btn bg-pink-300">Favorite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
