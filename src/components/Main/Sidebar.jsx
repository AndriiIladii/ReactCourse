import React from "react";
import Nav from "../Header/Nav";

const Sidebar = ({ nav }) => {
  return (
    <>
      <ul>
        <li>Страница 1</li>
        <li>Страница 2</li>
        <li>Страница 3</li>
      </ul>
      <Nav nav={nav} />
    </>
  );
};

export default Sidebar;
