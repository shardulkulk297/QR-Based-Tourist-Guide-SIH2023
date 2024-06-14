import React from 'react';

const RestaurantCard = ({ imageUrl, name, rating }) => {
  return (
    <div className="restaurant-card">
      <img src={imageUrl}  className="restaurant-image" />
      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-rating">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
