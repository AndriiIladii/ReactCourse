import React from "react";
import { useDispatch } from "react-redux";
import { decrement, removeFromCart } from "../store/cartSlice";

const Cart = ({ item }) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrement(item.articul));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.articul));
  };

  const cost = item.cost || 0;
  const quantity = item.quantity || 0;

  return (
    <tr>
      <td>{item.title}</td>
      <td>{cost}</td>
      <td>{quantity}</td>
      <td>{(cost * quantity).toFixed(2)}</td>
      <td>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleRemove}>Remove</button>
      </td>
    </tr>
  );
};

export default Cart;
