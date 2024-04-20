import React from "react";
import Header from "./Header";
import Category from "./Category";
import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import CategoryDescription from "./CategoryDescription";
import Error from "./Error";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as styles from "./App.module.css";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Category" element={<Category />} />
          <Route
            path="/CategoryDescription/:url"
            element={<CategoryDescription />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
