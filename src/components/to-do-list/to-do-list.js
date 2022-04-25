import React from "react";
import ToDoListItem from "../to-do-list-item";
import "./to-do-list.css";

const ToDoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <ToDoListItem
          {...itemProps}
          // it's the same label={item.label}
          // important={item.important}.
          // Create a custom event onDeleted
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });
  return <ul className="list-group to-do-List">{elements}</ul>;
};
export default ToDoList;
