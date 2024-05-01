import React from "react";
import PlaceholderPostHook from "./PlaceholderPostHook";
import CommentHook from "./CommentHook";
import Comment2Hook from "./Comment2Hook";

import * as styles from "./App.module.css";

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <PlaceholderPostHook />
        <hr />
        <CommentHook />
        <hr />
        <Comment2Hook />
      </div>
    </>
  );
};

export default App;
