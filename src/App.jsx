import React from "react";
import { useState } from "react";

import * as styles from "./App.module.css";

const App = () => {
  const [st1, setSt1] = useState("");
  let ST1 = React.createRef();
  const [st2, setSt2] = useState("");

  const [st3, setSt3] = useState("");
  const [st4, setSt4] = useState("");
  const [st5, setSt5] = useState("");
  const [st6, setSt6] = useState("");
  const [st7, setSt7] = useState("");
  let ST7 = React.createRef();
  const [st8, setSt8] = useState("");
  const [st9, setSt9] = useState("");

  let ST10 = React.createRef();
  const [st10, setSt10] = useState([]);

  function task1() {
    setSt1(ST1.current.value);
  }

  function task2() {
    let count = st2;
    count++;
    setSt2(count);
  }
  function task3(event) {
    setSt3(event.target.value);
  }
  function task4() {
    let count = st4;
    count++;
    setSt4(count);
  }
  function task5(event) {
    event.target.checked ? setSt5(event.target.value) : 0;
  }
  function task6(event) {
    setSt6(event.target.value);
  }

  function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
  }

  function task7() {
    setSt7(
      (ST7.current.style.backgroundColor = `rgb(${getRandomInt(
        0,
        255
      )}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`)
    );
  }
  function task8(event) {
    if (!isNaN(+event.target.value)) {
      setSt8(st8 + "1");
    } else {
      setSt8(st8 + "0");
    }
  }
  function task9(event) {
    setSt9(event.target.value);
  }
  function task10() {
    let val = [...st10, ST10.current.value];
    setSt10(val);
  }
  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={ST1} />
        <button className="task-1" onClick={task1}>
          Push
        </button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className={styles.task2} onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" defaultValue="55" onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className={styles.block7} ref={ST7}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyUp={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onChange={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={ST10}></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
        <div>{st10}</div>
      </section>
    </>
  );
};

export default App;
