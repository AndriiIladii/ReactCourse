import React from "react";
import * as styles from "./Nav.module.css";

const Nav = ({ nav }) => {
  return (
    <>
      <nav>
        <ul className="main-navigation">
          {nav.map((item) => {
            <li>
              <a href={item.link}>{item.text}</a>
            </li>;
          })}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
