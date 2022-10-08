import React from "react";
import { Link } from "react-router-dom";

const RestuITemDisplaly = ({ item }) => {
  let { idMeal, strMeal, strArea, strMealThumb, strInstructions } = item;
  return (
    <div className="mb-10">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={strMealThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <p className="text-justify">{strInstructions.slice(0, 250)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={`${idMeal}`}>See Details </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestuITemDisplaly;
