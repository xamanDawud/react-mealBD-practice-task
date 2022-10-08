import React from "react";
import { useLoaderData } from "react-router-dom";
import RestuITemDisplaly from "../RestuItemDisplay/RestuITemDisplaly";

const Restaurant = () => {
  let restuItem = useLoaderData();
  //   console.log(restuItem);
  return (
    <div className="grid md:grid-cols-3 mt-10 justify-center">
      {restuItem.meals.map((item) => (
        <RestuITemDisplaly key={item.idMeal} item={item} />
      ))}
    </div>
  );
};

export default Restaurant;
