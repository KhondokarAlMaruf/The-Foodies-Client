import { Rating } from "@smastrom/react-rating";
import React from "react";
import { toast } from "react-hot-toast";

const ViewDetailsRecipes = ({ recps }) => {
  console.log(recps);
  const handletoast = () => {
    toast.success("Add your Favorite Successfully");
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl border-8 border-pink-300 ms-10">
      <figure>
        <img src={recps.recipeImage} />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{recps.recipeName}</h2>
        <ul>
          <h2>Ingredients: </h2>
          <li>{recps.ingredients[0]}</li>
          <li>{recps.ingredients[1]}</li>
          <li>{recps.ingredients[2]}</li>
          <li>{recps.ingredients[3]}</li>
          <li>{recps.ingredients[4]}</li>
        </ul>
        <p>CookingMethod: {recps.cookingMethod}</p>
        <Rating style={{ maxWidth: 200 }} value={recps?.rating} readOnly />
        <div className="card-actions justify-end">
          <button onClick={handletoast} className="btn bg-pink-300">
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsRecipes;
