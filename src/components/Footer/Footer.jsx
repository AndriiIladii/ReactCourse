import React from "react";
import Nav from "../Header/Nav";
import * as styles from "./Footer.module.css";

const Footer = ({ site }) => {
  return (
    <>
      <footer>
        <h3>{site.site_name}</h3>
        <Nav />
      </footer>
    </>
  );
};

export default Footer;
