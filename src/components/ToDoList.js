import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ todos }) => {
  const elements = todos.map((item) => {
    return (
      <li>
        <ToDoListItem {...item}/>
        // it's the same
        // label={item.label} 
        // important={item.important} 
      </li>
    );
  });
  return <ul>{elements}</ul>;
};
export default ToDoList;
