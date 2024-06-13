import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";

//redux
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
