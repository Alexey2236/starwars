import React from "react";
import { HashRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Provider>
);
