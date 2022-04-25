import React, { Component } from "react";
import SearchPanel from "../search-panel";
import AppHeader from "../app-header";
import ToDoList from "../to-do-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {
  // generate id
  maxId = 100;

  state = {
    toDoData: [
      this.createTodoItem("Eat burger"),
      this.createTodoItem("Build awesome app"),
      this.createTodoItem("Sleep"),
    ],
  };
  
  createTodoItem(label) {
    return {
      label,
      important: false,
      id: this.maxId++,
      done: false,
    };
  }

  deleteItem = (id) => {
    this.setState(({ toDoData }) => {
      const index = toDoData.findIndex((el) => el.id === id);
      // const before = toDoData.slice (0, index);
      // const after = toDoData.slice (index + 1);
      const newArray = [
        ...toDoData.slice(0, index),
        ...toDoData.slice(index + 1),
      ];
      return {
        toDoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    // add element in array
    this.setState(({ toDoData }) => {
      const newArr = [...toDoData, newItem];
      return {
        toDoData: newArr,
      };
    });
  };

  togglePrperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);
    // update object
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    // construct new array
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.togglePrperty(toDoData, id, "important"),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.togglePrperty(toDoData, id, "done"),
      };
    });
  };

  render() {
    const { toDoData } = this.state;
    const doneCount = toDoData.filter((el) => el.done).length;
    const toDoCount = toDoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <SearchPanel />
        <ItemStatusFilter />
        <ToDoList
          todos={toDoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}