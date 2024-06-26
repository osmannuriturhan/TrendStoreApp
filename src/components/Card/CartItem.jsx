/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../context/CartProvider";

const CartItem = ({ product }) => {
  const { removeItem } = useContext(CartContext);
  const { id, img, name, price, amount } = product;

  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={img} alt={name} />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>cart item name</b>
          <div>
            <span>₺{price} x </span>
            <span className="cart-item-amount">{amount}</span>
          </div>
        </div>
        <a
          href="/"
          className="cart-item-remove"
          onClick={(e) => {
            e.preventDefault();
            removeItem(id);
          }}
        >
          x
        </a>
      </div>
    </li>
  );
};

export default CartItem;
