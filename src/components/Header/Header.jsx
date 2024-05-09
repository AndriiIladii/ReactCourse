import React from "react";
import Nav from "./Nav";

const Header = ({ smth }) => {
  return (
    <>
      <header>
        <h1>{smth.site_name}</h1>
        <h2>{smth.site_title}</h2>
        <Nav nav={smth.nav} />
      </header>
    </>
  );
};

export default Header;
