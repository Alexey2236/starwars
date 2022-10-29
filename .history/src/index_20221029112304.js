import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
