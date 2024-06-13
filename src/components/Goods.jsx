import React from "react";

const Goods = (props) => {
  return (
    <div>
      <img src={props.image} />
      <p>{props.title}</p>
      <p>{props.cost}</p>
      <button className="addToCart" data-key={props.articul}>
        Add to cart
      </button>
    </div>
  );
};

export default Goods;
