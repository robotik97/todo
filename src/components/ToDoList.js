import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
  return (
    <ul>
      <li> <ToDoListItem label="Eat burger" /> </li>
      <li> <ToDoListItem label = "Build awesome App" important /> </li>
    </ul>
  );
};
export default ToDoList;
