import React from "react";

const CommentsListHook = (props) => {
  return (
    <div>
      {props.data.map((item, index) => (
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
  );
};

export default CommentsListHook;
