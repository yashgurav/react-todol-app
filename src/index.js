import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ToDoContextProvider from "./context/todo-context";
ReactDOM.render(
  <ToDoContextProvider>
    <App />
  </ToDoContextProvider>,

  document.getElementById("root")
);
