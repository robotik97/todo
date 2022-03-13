import React, {Component} from "react";
import "./to-do-list-item.css";
// create a class to get the internal state of component
export default class ToDoListItem extends Component {
  render (){
// destructuring properties from object props. It's the same
// props.label = {label}
// props.important = {important}
// change color and font weight item if it important
    const { label, important = false } = this.props
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
  }
}
