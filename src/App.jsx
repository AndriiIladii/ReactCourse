import React from "react";
import { useState } from "react";

import * as styles from "./App.module.css";

const App = () => {
  const [out5, setOut5] = useState("");
  const [out6, setOut6] = useState("");
  const [out7, setOut7] = useState("");
  const [out8, setOut8] = useState("");
  const [out9, setOut9] = useState("");
  const div6 = React.createRef();
  const div7 = React.createRef();
  const div9 = React.createRef();
  const div10 = React.createRef();

  function task1() {
    console.log("task2");
  }
  function task2(event) {
    event.target.classList.add("active");
  }
  function task3(event) {
    console.log(event.target.value);
  }

  let count = 4;
  function task4() {
    console.log(count++);
  }
  function task5(event) {
    let val = event.target;
    if (val.checked) {
      setOut5(event.target.value);
    } else {
      setOut5(0);
    }
  }
  function task6() {
    setOut6(div6.current.value);
  }

  function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
  }

  function task7() {
    let color = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(
      0,
      255
    )}, ${getRandomInt(0, 255)})`;
    div7.current.style.backgroundColor = color;
    setOut7(color);
  }
  function task8(event) {
    if (!isNaN(+event.key)) {
      setOut8(out8 + 1);
    } else {
      setOut8(out8 + 0);
    }
  }
  function task9() {
    setOut9(div9.current.value);
  }
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(div10.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>
          Push
        </button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className={styles.task2} onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" defaultalue="55" onChange={task5} />
        <div className="out5">{out5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" ref={div6} onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out6">{out6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className={styles.block7} ref={div7}>
          {out7}
        </div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyUp={task8}></input>
        <div className="out-8">{out8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input
          type="range"
          className="task-9"
          ref={div9}
          onInput={task9}
        ></input>
        <div className="out-9">{out9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input
          type="number"
          className="i-10"
          ref={div10}
          onClick={task10}
        ></input>
        <button className="task-10">Push</button>
      </section>
    </>
  );
};

export default App;
