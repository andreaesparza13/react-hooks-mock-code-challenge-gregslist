import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleteListing }) {

  const listingCardDisplay = listings.map(listing => (
    <ListingCard 
      key={listing.id}
      image={listing.image}
      description={listing.description}
      location={listing.location}
      listing={listing}
      handleDeleteListing={handleDeleteListing}
    />
  ))

  return (
    <main>
      <ul className="cards">
        {listingCardDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
