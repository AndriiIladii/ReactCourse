import React, { useState } from "react";
import CommentsListHook from "./CommentListHook";
import Comments2ListHook from "./Comments2ListHook";

const Comment2Hook = () => {
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
          <Comments2ListHook data={data} />
          {/* <CommentsListHook data={data} /> */}
        </div>
      </div>
    </>
  );
};

export default Comment2Hook;
