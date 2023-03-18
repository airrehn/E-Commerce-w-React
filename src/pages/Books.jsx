import React, { useState } from "react";
import Book from "../components/ui/Book";

export default function Books({ books}) {
  const [sortedBooks, setBooks] = useState(books);

  function filterBooks(filter) {
    const temp = sortedBooks.slice() //makes a clone, if u just do =, u are referencing the array, change to temp will still change original books dataset. This is not what u want. Hence slice().
    if (filter === 'LOW_TO_HIGH') {
      setBooks(
        temp.sort(
          (a, b) =>
            (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice) //get -ve means a is placed in front.
        )
      );
    }
    if (filter === 'HIGH_TO_LOW') {
      setBooks(
        temp.sort(
          (b,a) =>
            (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice) //get -ve means b is place in front.
        )
      );
    }
    if (filter === 'RATING') {
      setBooks(
        temp.sort(
          (a, b) =>
            (b.rating) - (a.rating) //+ve means a gets put behind, i.e. if a is low, it will be later in the array
        )
      );
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  id="filter"
                  defaultValue="DEFAULT"
                  onChange={(event) => filterBooks(event.target.value)}
                >
                  {/* the event here is the, "values" (LOW_TO_HIGH)of the option */}
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {sortedBooks.map((x) => (
                  <Book book={x} key={x.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
