import React from "react";
import GoodsList from "../containers/GoodsList";
import Cartlist from "../containers/CartList";
import * as styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <div>
        <GoodsList />
        <Cartlist />
      </div>
    </div>
  );
};

export default App;
