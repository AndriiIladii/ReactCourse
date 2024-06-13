import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGoods } from "../store/goodsSlice";
import Goods from "../components/Goods";
import * as styles from "../components/App.module.css";
import { increment } from "../store/cartSlice";

const GoodsList = () => {
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();

  let clickHandler = (event) => {
    event.preventDefault();
    let t = event.target;
    if (!t.classList.contains("addToCart")) return true;
    dispatch(increment(t.getAttribute("data-key")));
  };

  return (
    <>
      <div className={styles.goodsField} onClick={clickHandler}>
        {goods.map((item) => (
          <Goods
            title={item.title}
            cost={item.cost}
            image={item.image}
            articul={item.articul}
            key={item.articul}
          />
        ))}
      </div>
    </>
  );
};

export default GoodsList;
