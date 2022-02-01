import React from "react";

const ToDoListItem = ({ label, important = false }) => { 
    // change color item if it important
  const color = {
    color: important ? "tomato" : "black",
  };
  return <span style={color}> {label}</span>;
};
export default ToDoListItem;
