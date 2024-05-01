import React, { useRef, useState } from "react";

import * as styles from "./App.module.css";

const App = () => {
  const h1 = React.createElement("h1", {}, "unit_08");
  const h2 = React.createElement(
    "h2",
    {
      className: "text-orange",
    },
    "header 2"
  );
  const p = React.createElement(
    "p",
    {
      style: {
        color: "red",
      },
    },
    "this is p"
  );
  const input = React.createElement("input", {
    type: "text",
    value: "55",
  });

  const p1 = "hi";
  const p2 = "world";
  const div = React.createElement(
    "div",
    {
      className: "text-grey",
    },
    [p1, p2]
  );

  const inputRef = useRef();
  const [list, setList] = useState([]);

  function getValue() {
    if (inputRef.current.value !== "") {
      setList([...list, inputRef.current.value]);
    }
  }

  const input2 = React.createElement("input", { ref: inputRef });
  const button = React.createElement(
    "button",
    { onClick: getValue },
    "click me"
  );

  return (
    <>
      <div className={styles.container}>
        {h1}
        {h2}
        {p}
        {input}
        {div}

        <div>
          {input2}
          {button}
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
