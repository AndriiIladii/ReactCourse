import React from "react";
import AddUser from "../containers/AddUser";
import UserList from "../containers/UserList";
import * as styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <AddUser />
      <UserList />
    </div>
  );
};

export default App;
