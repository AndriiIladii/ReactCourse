import React from "react";
import { useState } from "react";

import * as styles from "./App.module.css";

const App = () => {
  let ST1 = React.createRef();
  let ST2 = React.createRef();
  let ST5 = React.createRef();
  let ST6 = React.createRef();
  let ST7 = React.createRef();
  let ST8 = React.createRef();
  let ST9 = React.createRef();
  let ST10 = React.createRef();

  const [st1, getSt1] = useState("");
  const [st2, getSt2] = useState("");
  const [st3, getSt3] = useState("");
  const [st4, getSt4] = useState("");
  const [st5, getSt5] = useState("");
  const [st6, getSt6] = useState("");
  const [st7, getSt7] = useState("");
  const [st8, getSt8] = useState("");
  const [st9, getSt9] = useState("");
  const [st10, getSt10] = useState([]);

  function task1() {
    getSt1(ST1.current.value);
  }
  function task2() {
    let count = st2;
    count++;
    getSt2(count);
  }
  function task3(event) {
    getSt3(event.target.value);
  }
  function task4() {
    let count = st4;
    count++;
    getSt4(count);
  }
  function task5() {
    let val = 0;
    if (ST5.current.checked) val = ST5.current.value;
    getSt5(val);
  }
  function task6() {
    getSt6(ST6.current.value);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function task7() {
    getSt7(
      (ST7.current.style.backgroundColor = `rgb(${getRandomInt(
        0,
        255
      )}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`)
    );
  }
  function task8() {
    let key = ST8.current.value;
    if (!isNaN(+key)) {
      getSt8(st8 + "1");
    } else {
      getSt8(st8 + "0");
    }
  }
  function task9() {
    getSt9(ST9.current.value);
  }
  function task10() {
    let value = ST10.current.value;
    let values = [...st10, value];
    getSt10(values);
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
        <div className={styles.task2} ref={ST2} onMouseEnter={task2}></div>
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
        <input type="checkbox" ref={ST5} defaultValue="55" onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" ref={ST6} onChange={task6}>
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
        <input type="text" className="task-8" ref={ST8} onKeyUp={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input
          type="range"
          className="task-9"
          ref={ST9}
          onInput={task9}
        ></input>
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
