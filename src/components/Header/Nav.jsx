import React from "react";

const Nav = ({ nav }) => {
  return (
    <nav>
      <ul className="main-navigation">
        {nav.map((item) => (
          <li key={item.link}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
