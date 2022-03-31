import React from "react";
import SearchPanel from "../search-panel";
import AppHeader from "../app-header";
import ToDoList from "../to-do-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

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
      <ToDoList todos={toDoData}
      onDeleted = { (id)=> console.log ('del', id)}/>
    </div>
  );
};
export default App;