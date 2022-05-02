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
      this.createTodoItem("Learn English"),
      this.createTodoItem("Get a dream job"),
      this.createTodoItem("Sleep"),
    ],
    term: "",
    filter: "",
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

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }
  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  onSearchChange = (term) => {
    this.setState({ term });
  };

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }
  render() {
    const { toDoData, term, filter } = this.state;
    // filter the search result (first search, then filter)
    const visibleItems = this.filter(this.search(toDoData, term), filter);
    const doneCount = toDoData.filter((el) => el.done).length;
    const toDoCount = toDoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <SearchPanel onSearchChange={this.onSearchChange} />
        <ItemStatusFilter
          filter={filter}
          onFilterChange={this.onFilterChange}
        />
        <ToDoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm className="d-flex" onItemAdded={this.addItem} />
      </div>
    );
  }
}
