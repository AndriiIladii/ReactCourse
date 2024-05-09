import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Sidebar from "./components/Main/Sidebar";
import * as styles from "./App.module.css";

const App = () => {
  const site = {
    site_name: "react test",
    site_title: "my first site with react",
    nav: [
      { link: "nav1", text: "my link" },
      { link: "nav2", text: "my link 2" },
      { link: "nav3", text: "my link 3" },
    ],
  };
  return (
    <>
      <div className={styles.container}>
        <Header smth={site} />
        <Main />
        <Sidebar nav={site.nav} />
        <Footer site={site} />
      </div>
    </>
  );
};

export default App;
