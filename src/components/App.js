import React, { Component } from 'react';
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from './ToDonesContainer';



export default class App extends Component {
  constructor(props) {
    super(props);
    //this because it is inside function constructor, without will be without

      this.state = {
        items: [
          {text:"first task", done: false, id: 0},
          {text:"second task", done: false, id: 1},
          {text:"third task", done: false, id: 2},
          {text:"fourth task", done: false, id: 3},
          {text: "create a website", done: true, id: 4},
          {text: "read a book", done: true, id: 5},
          {text: "make a call", done: true, id: 6},
          {text: "buy a lap top", done: true, id: 7}
        ]
      }
    }
      //need write a method where state is, which we change

    updateItem = (id) => {
      const updatedItems = this.state.items.map(item => {
        if (item.id === id) {
          item.done = !item.done
          return item
        } else {
          return item
        }
      })
      this.setState({
        items: updatedItems
      })
    }

    AddItem = (InputText) => {
      const item = {
        id: this.state.items.length,
        text: InputText,
        done: false
      }
      /* this.state.items.push - will be warning directly mute, use setState() */

      this.setState({
        items: [item, ...this.state.items]
      })
    }

    deleteItem = (id) => {
      const updatedItem = this.state.items.filter(item =>  item.id !== id)
      
      this.setState({
        items: updatedItem
      }) 
  }
  
  render() {

    const toDones = this.state.items.filter(item => item.done===true);
    const toDos = this.state.items.filter(item => item.done===false);

    return (
      <div className="app">
        <Navigation />
        <ToDosContainer toDosProps={toDos} AddItemProps={this.AddItem} updateItemProps = {this.updateItem}  deleteItemProps={this.deleteItem} />
        <ToDonesContainer toDonesProps={toDones} updateItemProps = {this.updateItem}  deleteItemProps={this.deleteItem} />
      </div>
    )
  }
}



