import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import RootComponent from "./RootComponent";

ReactDOM.render(
  <Provider store={store}>
    <RootComponent></RootComponent>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
