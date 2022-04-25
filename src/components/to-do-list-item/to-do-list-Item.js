import React, { Component } from "react";
import "./to-do-list-item.css";
// create a class to get the internal state of component
export default class ToDoListItem extends Component {
  // state = {
  //   done: false,
  //   important:false
  // }
  // onLabelClick = () => {
  // we transfer only changes to the set state.
  // set state does not accept full values,
  //  but only those that need to be changed.
  // so that the current state depends on the
  //  previous one, we add a function.
  //  The argument is the current state.---
  //   this.setState(({done}) => {
  //     return {
  //       done: !done
  //     }
  //   })
  // };
  // if the current state depends on the previous one
  // we needed write this - this.setState( (state))=>...
  // or make destructuring like this - this.setState( ({important}) =>...
  // onMarkImportant = () => {
  //   this.setState( ({important}) =>{
  //     return {
  //       important: !important
  //     }
  //   })
  // }

  render() {
    // destructuring properties from object props. It's the same
    // props.label = {label}
    // props.important = {important}
    // change color and font weight item if it important
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
    } = this.props;
    // const {done, important} = this.state;

    let classNames = "todo-list-item";
    // done & important take from the state
    if (done) {
      // add a space so that the new class is correctly
      //  displayed when the button is clicked
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span onClick={onToggleDone}>{label}</span>

        <span>
          <button
            type="button"
            className="btn btn-outline-success btn-sm float-right "
            onClick={onToggleImportant}
          >
            <i className="fa-solid fa-thumbtack"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </span>
      </span>
    );
  }
}
