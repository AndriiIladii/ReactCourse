import React from "react";
import ReactDom from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import initialState from "./store/initialState";
import App from "./components/App";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
