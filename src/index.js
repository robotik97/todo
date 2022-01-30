import React from "react";
import ReactDOM from "react-dom";

import SearchPanel from "./components/search-panel";
import AppHeader from "./components/app-header";

const ToDoList = () => {
  const items = ["learn react", "build app"];
  return (
    <ul>
      <li>Learn React</li>
      <li>Build App</li>
      <li>Make awesome app</li>
    </ul>
  );
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
