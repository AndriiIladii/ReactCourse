import React, { useState, useEffect } from "react";

export default function Comments2ListHook(props) {
  const [data, setData] = useState([]);

  const onlyEven = () => {
    setData((a) => {
      const evenPost = a.filter((item, index) => index % 2 === 0);
      return evenPost;
    });
  };

  useEffect(() => {
    console.log("effect");
    if (props.data.length > 0) setData(props.data);
  }, [props]);

  console.log(data);

  return (
    <div>
      <div>
        <button onClick={onlyEven}>Only even comments</button>
      </div>
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
  );
}
