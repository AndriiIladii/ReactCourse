import React, { useState } from "react";

const CommentHook = () => {
  const [data, setData] = useState([]);

  function selectHandler(event) {
    let val = event.target.value;
    fetch("https://jsonplaceholder.typicode.com/posts/" + val + "/comments")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }
  return (
    <>
      <div>
        <p>Choose post ID:</p>
        <select onChange={selectHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div>
          <h1>Comments</h1>
          {data.map((item, index) => (
            <section key={item.id}>
              <p>
                <b>
                  {index + 1}. {item.email}
                </b>
              </p>
              <p>{item.body}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentHook;
