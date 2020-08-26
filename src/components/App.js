import React, { Component } from 'react';
import "../css/App.scss";
import Navigation from "./Navigation"
import ToDosContainer from "./ToDosContainer"
import ToDonesContainer from './ToDonesContainer';



export default class App extends Component {
  constructor(props) {
    super(props);
    //this because it is inside function constructor, without will be without

      this.state = {
        items: [
          {text:"first task", done: false},
          {text:"second task", done: false},
          {text:"third task", done: false},
          {text:"fourth task", done: false},
          {text: "create a website", done: true},
          {text: "read a book", done: true},
          {text: "make a call", done: true},
          {text: "buy a lap top", done: true}
        ]
      }
    }
      

  
  render() {

    const toDones = this.state.items.filter(item => item.done===true);
    const toDos = this.state.items.filter(item => item.done===false);

    return (
      <div className="app">
        <Navigation />
        <ToDosContainer toDosProps={toDos}/>
        <ToDonesContainer toDonesProps={toDones}/>
      </div>
    )
  }
}



