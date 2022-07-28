import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListing] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(listingsArray => setListing(listingsArray))
  }, []);

  const searchResults = listings.filter(listing => (
    listing.description.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleDeleteListing(deletedListing) {
    const updatedListing = listings.filter(listing => listing.id !== deletedListing.id);
    setListing(updatedListing);
  }

  return (
    <div className="app">
      <Header handleChange={handleChange}  />
      <ListingsContainer listings={searchResults} handleDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
