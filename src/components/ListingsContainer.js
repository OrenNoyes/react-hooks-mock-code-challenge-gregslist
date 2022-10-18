import React from "react";
import ListingCard from "./ListingCard"


function ListingsContainer({cards}) {
  const listingDetails = cards.map((listings) => {
    return <ListingCard key={listings.id} description = {listings.description} image = {listings.image} location = {listings.ocation}/>
  })
  return (
    <main>
      <ul className="cards">
        {listingDetails}
      </ul>
    </main>
  );
}

export default ListingsContainer;
