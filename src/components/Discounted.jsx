import React from "react";
import { books } from "../data.js";
import Book from "./ui/Book";

export default function Discounted() {
  return (
    <section id="discounted">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.salePrice != null)
              .slice(0, 8)
              .map((x) => (
                <Book book={x} key={x.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
