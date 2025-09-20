
import React from "react";

export default function Card({ title, location, price, image }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={title} />
      </div>
      <div className="card__content">
        <h3>{title}</h3>
        <p className="card__location">{location}</p>
        <p className="card__price">${price}</p>
        <button className="card__btn">Ver detalles</button>
      </div>
    </div>
  );
}
