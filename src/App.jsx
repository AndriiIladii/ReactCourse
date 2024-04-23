import React from "react";
import { useState } from "react";

import * as styles from "./App.module.css";

const App = () => {
  let count4 = 0;

  const [out5Value, setOut5Value] = useState(0);
  const [output6Value, setOut6Value] = useState(0);
  const [output8Value, setOut8Value] = useState("");
  const [output9Value, setOut9Value] = useState(0);

  let div6 = React.createRef();
  let div7 = React.createRef();
  let div8 = React.createRef();
  let div9 = React.createRef();
  let div10 = React.createRef();

  function task1() {
    console.log("task2");
  }
  function task2(event) {
    event.target.classList.add("active");
  }
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    count4++;
    console.log(count4);
  }
  function task5(event) {
    let val = 0;
    if (event.target.checked) val = event.target.value;
    setOut5Value(val);
  }
  function task6() {
    setOut6Value(inputChange.current.value);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function task7() {
    div7.current.style.backgroundColor = `rgb(${getRandomInt(
      0,
      255
    )}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  }
  function task8(event) {
    if (!isNaN(+event.key)) {
      setOut8Value(output8Value + 1);
    } else {
      setOut8Value(output8Value + 0);
    }
  }
  function task9() {
    setOut9Value(div9.current.value);
  }
  let ar10 = [5, 6, 7];
  function task10() {
    let value = div10.current.value;
    ar10.push(value);
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
        <div className="out5">{out5Value}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" ref={div6} onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out6">{output6Value}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className={styles.block7} ref={div7}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input
          type="text"
          className="task-8"
          ref={div8}
          onKeyUp={task8}
        ></input>
        <div className="out-8">{output8Value}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input
          type="range"
          className="task-9"
          ref={div9}
          onInput={task9}
        ></input>
        <div className="out-9">{output9Value}</div>
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
