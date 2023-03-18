import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

export default function Book({ book }) {
  function imageLoaded() {

  }
  return (
    <div className="book">
      <div className="skeleton book__img--skeleton"></div>
      <div className="skeleton book__title--skeleton"></div>
      <div className="skeleton book__rating--skeleton"></div>
      <div className="skeleton book__price--skeleton"></div>
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" onLoad={imageLoaded}/>
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice = {book.salePrice} originalPrice={book.originalPrice}/>
    </div>
  );
}
