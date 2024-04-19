import React from "react";
import Nav from "./Nav";
import * as styles from "./Header.module.css";

const Header = ({ site }) => {
  return (
    <>
      <header>
        <h1>{site.site_name}</h1>
        <h2>{site.site_title}</h2>
        <Nav />
      </header>
    </>
  );
};

export default Header;
