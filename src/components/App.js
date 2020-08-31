import React, { Component } from 'react';
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from './ToDonesContainer';
import Help from "./Help";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import NotFound from './NotFound';



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
      }, ()=>{
        //if you use the same name for key it will overwrite previous one
        localStorage.setItem("to-do-app",JSON.stringify(this.state.items))
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
      }, ()=> {
        /* local storage; with JSON,stringify convert arr to string */
        localStorage.setItem("to-do-app",JSON.stringify(this.state.items))
      })
    }

    //one time we need datas from local storage, componentDidMount - best place to fetch data
    //we need to receive an actual local storage
    componentDidMount(){
      //get data stored in local storage
      let storedItems = localStorage.getItem("to-do-app");
      //to convert string to object
      let convertedToOriginal = JSON.parse(storedItems);

        //to check if item where before execute
      if(storedItems !== null) {
        //to store in state
        this.setState({
          items: convertedToOriginal
        })
      }
    }

    //another way with static getDerivedStateFromProps(state)
  

    deleteItem = (id) => {
      const updatedItem = this.state.items.filter(item =>  item.id !== id)
      
      this.setState({
        items: updatedItem
      }, ()=> {
        //will update local storage after delete item
        localStorage.setItem("to-do-app",JSON.stringify(this.state.items))
      }) 
  }
  
  render() {

    const toDones = this.state.items.filter(item => item.done===true);
    const toDos = this.state.items.filter(item => item.done===false);

    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />
         {/* {/* <Route path="/" component={NameOfTheComponent}/>  //you will receive browserRouter props but not pass custom props*/}
          
          {/* <Route path="/" render={(props)=><ComponentTag {...props} customerProps/>}/> //you will receive browserRouter props and pass custom props */}
      
       {/*    <Route path="/" //you will not receive browserRouter props but can pass custom props>
            <Components1/>
            <Components2/>
          </Route> */} 
        <Switch>
          <Route exact path="/">
            <ToDosContainer toDosProps={toDos} AddItemProps={this.AddItem} updateItemProps = {this.updateItem}  deleteItemProps={this.deleteItem} />
            <ToDonesContainer toDonesProps={toDones} updateItemProps = {this.updateItem}  deleteItemProps={this.deleteItem} />
            
          </Route>
          <Route exact path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}



