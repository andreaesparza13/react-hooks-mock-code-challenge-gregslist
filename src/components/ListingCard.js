import React, { useState } from "react";

function ListingCard({ listing, image, description, location, handleDeleteListing }) {

  const [favorite, setFavorite] = useState(false)

  function toggleFavorite() {
    setFavorite(favorite => !favorite)
  }

  function onDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => handleDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={toggleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={onDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
