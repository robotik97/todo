import React from "react";
import ToDoListItem from "../to-do-list-item";
import "./to-do-list.css"

const ToDoList = ({ todos }) => {
  
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item" >
        <ToDoListItem {...itemProps} />
        {/* it's the same
        label={item.label} 
        important={item.important}  */}
      </li>
    );
  });
  return <ul className="list-group to-do-List">{elements}</ul>;
};
export default ToDoList;
