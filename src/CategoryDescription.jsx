import React from "react";
import { useParams } from "react-router-dom";

const CategoryDescription = () => {
  let { url } = useParams();
  return (
    <>
      <a href="/Category"></a>
      <h1>Category: {url}</h1>
    </>
  );
};

export default CategoryDescription;
