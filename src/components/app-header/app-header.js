import React from "react";
import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header">
      <h2>My ToDo List</h2>
      <h5> {toDo} more to do, {done} done </h5>
    </div>
  );
};

export default AppHeader;
