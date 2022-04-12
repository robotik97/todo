import React, {Component} from "react";
import SearchPanel from "../search-panel";
import AppHeader from "../app-header";
import ToDoList from "../to-do-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

export default class App extends Component {
state = {
  toDoData : [
  { label: "Eat burger", important: false, id: "1" },
  { label: "Build awesome app", important: true, id: "2" },
  { label: "Sleep", important: false, id: "3" },
]
};

deleteItem =(id)=> {
  this.setState (({ toDoData }) => {
const index = toDoData.findIndex ((el)=>el.id===id);
const before = toDoData.slice (0, index);
const after = toDoData.slice (index + 1);
const newArray = [...before, ...after]
return {
  toDoData: newArray
}
  })
};

render (){
  return (
    <div className="todo-app">
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter/>
      <ToDoList 
      todos={this.state.toDoData}
      onDeleted = { this.deleteItem}/>
    </div>
  );
};
}

