import React from "react";
import * as styles from "./App.module.css";
import reactImage from "./public/images/react.png";

const App = () => {
  return (
    <>
      <h1>Hello MAN</h1>
      <p className={styles.text}>text</p>
      <select>
        <option value="1">one</option>
        <option value="2">two</option>
      </select>
      <hr />
      <img src={reactImage} />
    </>
  );
};

export default App;
