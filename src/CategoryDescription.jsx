import React from "react";
import { useParams, Link } from "react-router-dom";

const CategoryDescription = () => {
  let { url } = useParams();
  return (
    <>
      <Link to="/Category"></Link>
      <h1>Category: {url}</h1>
    </>
  );
};

export default CategoryDescription;
