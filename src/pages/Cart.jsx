import React from "react";
import CartItem from "../components/ui/CartItem";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

export default function Cart({ cart, changeQuantity, removeItem }) {
  function calcTotal() {
    let total = 0;
    cart.forEach((book) => {
      total += +((book.salePrice || book.originalPrice) * book.quantity);
    });
    return total;
  }

  function tax(total) {
    return total * 0.08;
  }

  return (
    <div id="books__body">
      <main id="books__id">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <div className="cart__book">Book</div>
                <div className="cart__quantity">Quantity</div>
                <div className="cart__price">Price</div>
              </div>
              <div className="cart__body">
                {cart.map((cartedBook) => {
                  return (
                    <CartItem
                      book={cartedBook}
                      changeQuantity={changeQuantity}
                      removeItem={removeItem}
                      key={cartedBook.id}
                    />
                  );
                })}
              </div>

              {cart.length == 0 && (
                <div className="cart__empty">
                  {/* if cart got nth inside, then perform div */}
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You don't have any books in your cart!</h2>
                  <Link to="/books">
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="total">
                {/* if cart got smth inside, then perform div */}
                <div className="total__item total__subtotal">
                  <span>Subtotal</span>
                  <span>${calcTotal().toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax (8%)</span>
                  <span>${tax(calcTotal()).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${(calcTotal() + tax(calcTotal())).toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert("In development, do check back soon!")}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
