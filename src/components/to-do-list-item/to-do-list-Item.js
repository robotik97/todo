import React, { Component } from "react";
import "./to-do-list-item.css";
// create a class to get the internal state of component
export default class ToDoListItem extends Component {
  state = {
    done: false,
    important:false
  }
  onLabelClick = () => {
    this.setState((state) => {
      return {
        done: !state.done
      }
    })
  };

  onMarkImportant = () => {
    this.setState( (state) =>{
      return {
        important: !state.important
      }
    })
  } 
  
  render() {
    // destructuring properties from object props. It's the same
    // props.label = {label}
    // props.important = {important}
    // change color and font weight item if it important
    const { label} = this.props;
    const {done, important} = this.state;
  
    let classNames = "todo-list-item";
    // done & important take from the state
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important"
    }

    return (
      <span className= {classNames}>
        <span onClick={this.onLabelClick}>
          {label}
        </span>

        <span>
          <button
            type="button"
            className="btn btn-outline-success btn-sm float-right "
            onClick={this.onMarkImportant}>
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
