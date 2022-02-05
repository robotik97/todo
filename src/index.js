import React from "react";
import ReactDOM from "react-dom";

import SearchPanel from "./components/search-panel";
import AppHeader from "./components/app-header";
import ToDoList from "./components/ToDoList";

const App = () => {
  const toDoData = [
    { label: 'Eat burger', important: false },
    { label: 'Build awesome app', important: true },
    { label: 'Sleep', important: false },
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todos={toDoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
