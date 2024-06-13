import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import { removeFromCart, selectCart, decrement } from "../store/cartSlice";

const CartList = () => {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  const goodsObject = goods.reduce((accum, item) => {
    accum[item["articul"]] = item;
    return accum;
  }, {});

  const handleRemove = (articul) => {
    dispatch(removeFromCart(articul));
  };

  const handleDecrement = (articul) => {
    dispatch(decrement(articul));
  };

  useEffect(() => {
    let total = 0;
    Object.keys(cart).forEach((item) => {
      const { cost } = goodsObject[item];
      total += cost * cart[item];
    });
    setTotalPrice(total);
  }, [cart, goodsObject]);

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>good</th>
              <th>price</th>
              <th>count</th>
              <th>whole price</th>
              <th>edit</th>
            </tr>
          </thead>

          <tbody>
            {Object.keys(cart).map((item) => (
              <tr key={item}>
                <td>
                  <div>
                    <span>{goodsObject[item].title}</span>
                    <img
                      src={goodsObject[item].image}
                      alt={goodsObject[item].title}
                    />
                  </div>
                </td>
                <td>{goodsObject[item].cost} грн/кг</td>
                <td>{cart[item]}кг</td>
                <td>{(goodsObject[item].cost * cart[item]).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <button onClick={() => handleRemove(item)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>total Price: {totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartList;
