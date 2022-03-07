import React from "react";
import ReactDOM from "react-dom";

import SearchPanel from "./components/search-panel";
import AppHeader from "./components/app-header";
import ToDoList from "./components/to-do-list";
import ItemStatusFilter from "./components/item-status-filter";
import "./index.css";

const App = () => {
  const toDoData = [
    { label: "Eat burger", important: false, id: "1" },
    { label: "Build awesome app", important: true, id: "2" },
    { label: "Sleep", important: false, id: "3" },
  ];
  return (
    <div className="todo-app">
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter/>
      <ToDoList todos={toDoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
