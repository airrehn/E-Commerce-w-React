import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

export default function Book({ book }) {
  const [img, setImage] = useState(); //initially no img



  useEffect(() => {
    //called when Book component mounts
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {

          setImage(image);
        
      }, 200); 
    };

    // return () => {
    //   mountedRef.current = false;

    // } //performs when component unmounts

  });

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={img.src} alt="" className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="skeleton book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
}
