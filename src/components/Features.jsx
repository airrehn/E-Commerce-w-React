import React from "react";
import Book from "./ui/Book";
import { books } from "../data.js";

export default function Features() {
  // books.filter(book => book.rating===5).slice(0,4); //not incl. of 4th index

  return (
      <section id="features">
        <div className="container">
          <div className="row">
            <h2 className="section__title">
              Featured <span className="purple">Books</span>
            </h2>
            <div className="books">
              {books
                .filter((book) => book.rating === 5)
                .slice(0, 4)
                .map((x) => (
                  <Book book={x} key={x.id}/>
                ))}
            </div>
          </div>
        </div>
      </section>
  );
}
