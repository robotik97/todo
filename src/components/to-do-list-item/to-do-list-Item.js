import React from "react";
import "./to-do-list-item.css";

const ToDoListItem = ({ label, important = false }) => {
  // change color item if it important
  const changeStyle = {
    color: important ? "violet" : "black",
    fontWeight: important? "bold" : "normal"
  };
  return (
    <span className="todo-list-item" >
      <span style={changeStyle}> {label} </span>
      
  <span >
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right ">
        <i className="fa-solid fa-thumbtack"></i>
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right">
        <i className="fa-solid fa-trash-can"></i>
      </button>
      </span>
      </span>
  );
};
export default ToDoListItem;
