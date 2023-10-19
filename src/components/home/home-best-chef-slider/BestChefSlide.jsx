import React from "react";
export const BestChefSlide = ({ id, img, name, speciality }) => {
  return (
    <div className="bestChef-slider-item" key={id}>
      <div className="bestChef-slider-item-img">
        <img src={img} alt="" />{" "}
      </div>
      <div className="bestChef-slider-item-img-hover"></div>
      <h1>{name}</h1>
      <p>{speciality}</p>
    </div>
  );
};
