import React from "react";
import "./to-do-list-item.css"

const ToDoListItem = ({ label, important = false }) => {
  // change color item if it important
  const changeColor = {
    color: important ? "violet" : "black",
  };
  return <span style={changeColor}> {label}</span>;
  <button type="button"></button>
};
export default ToDoListItem;
