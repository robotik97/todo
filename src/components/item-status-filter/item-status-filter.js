import React, { Component } from "react";
import "./item-status-filter.css";
// create a class to get the internal state of the component
export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group  align-buttons">
        <button className="btn btn-info">All</button>
        <button className="btn btn-outline-secondary">Active</button>
        <button className="btn btn-outline-secondary">Done</button>
      </div>
    );
  }
}