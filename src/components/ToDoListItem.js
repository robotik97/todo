import React from "react";

const ToDoListItem = ({ label, important = false }) => {
  // change color item if it important
  const changeColor = {
    color: important ? "tomato" : "black",
  };
  return <span style={changeColor}> {label}</span>;
};
export default ToDoListItem;
