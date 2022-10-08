import React from "react";
import { useLoaderData } from "react-router-dom";

const RestuIndiItemDisplay = () => {
  let indiItem = useLoaderData().meals[0];

  return (
    <div className=" flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={indiItem.strMealThumb} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className={indiItem.strMeal}>Shoes!</h2>
          <p className="text-justify">
            {indiItem.strInstructions.slice(0, 200)}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestuIndiItemDisplay;
