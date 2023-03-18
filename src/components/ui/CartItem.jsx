import React from "react";

export default function CartItem({ book, changeQuantity,removeItem }) {
  return (
    <div className="cart__item">
      <div className="cart__book">
        <img src={book.url} alt="" className="cart__book--img" />

        <div className="cart__book--info">
          <span className="cart__book--title">{book.title}</span>
          <span className="cart__book--price">
            ${(book.salePrice || book.originalPrice).toFixed(2)}
          </span>
          <button className="cart__book--remove" onClick={() => removeItem(book)}>Remove</button>
        </div>
      </div>
      <div className="cart__quantity">
        <input
          type="number"
          min={1}
          max={99}
          className="cart__input"
          onChange={(event) => changeQuantity(book, event.target.value)}
          value={book.quantity}
        />
      </div>
      <div className="cart__price">${(book.salePrice? book.salePrice * book.quantity: book.originalPrice*book.quantity).toFixed(2)}</div>
    </div>
  );
}
