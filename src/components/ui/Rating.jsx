import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Rating({ rating }) {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}

      {
        // Number.isInteger(book.rating) ? '' : <FontAwesomeIcon icon="star-half-alt"/>
        !Number.isInteger(rating) && (<FontAwesomeIcon icon="star-half-alt" />) //same thing as above but cleaner, if condition met, do thing after &&.
      }
    </div>
  );
}
