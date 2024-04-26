import React, { Component } from "react";
import Goods from "./Goods";
import Cart from "./Cart";
import goodsArr from "./goods.json";

import * as styles from "./App.module.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: {},
      count: 0,
    };
  }

  addToCart = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains("add-to-cart")) return false;
    let cartTemp = this.state.cart;
    cartTemp[event.target.dataset.key]
      ? cartTemp[event.target.dataset.key]++
      : (cartTemp[event.target.dataset.key] = 1);
    // cartTemp++;
    this.setState({ cart: cartTemp });
    let count = this.state.count;
    count++;
    this.setState({ count: count });
  };

  render() {
    let showCart;
    if (this.state.count !== 0) {
      showCart = <Cart cart={this.state.cart} goods={goodsArr} />;
    } else {
      showCart = "Empty";
    }

    return (
      <div className={styles.container}>
        <h1>Cart</h1>

        <div className={styles.goodsField} onClick={this.AddToCart}>
          {goodsArr.map((item) => (
            <Goods
              title={item.title}
              cost={item.cost}
              image={item.image}
              articul={item.articul}
              key={item.articul}
            />
          ))}
        </div>
        {showCart}
      </div>
    );
  }
}

export default App;
