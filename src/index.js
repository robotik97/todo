import React from "react";
import ReactDOM from "react-dom";

import SearchPanel from "./components/search-panel";
import AppHeader from "./components/app-header";
import ToDoList from "./components/ToDoList";



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
