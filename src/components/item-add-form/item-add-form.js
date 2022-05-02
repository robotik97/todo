import React, { Component } from "react";
import "./item-add-form.css";
export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    //not reload page
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState ({
      label:''
    })
  };

  render() {
    return (
      <form className="item-add-form d-flex"
        onSubmit = {this.onSubmit}>
        <input
          type="text"
          className="form-control d-flex"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          // make control element
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary btn-width">
          Add Item
        </button>
      </form>
    );
  }
}
