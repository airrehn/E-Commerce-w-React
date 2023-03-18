import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import { books } from "./data";
import BooksInfo from "./pages/BooksInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((itemInside) =>
        itemInside.id === book.id
          ? {
              ...itemInside,
              quantity: +quantity, // "+" same meaning as parseInt(quantity) or parseFloat(quantity)
            }
          : itemInside
      )
    );
  }

  function numCartedItems() {
    let items = 0;
    cart.forEach(item => items += item.quantity)
    return items
  }
  function removeItem(item) {
    setCart(cart.filter(book=> book.id!==item.id))
  }


  return (
    <Router>
      <div className="App">
        <Nav numCartedItems={numCartedItems}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />{" "}
          {/* incl "exact", otherwise will conflict with "/books/1" for eg. since same starting */}
          <Route
            path="/books/:idee"
            element={
              <BooksInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem = {removeItem} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
