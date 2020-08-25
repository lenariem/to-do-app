import React from 'react';
import "../css/App.scss";
import Navigation from "./Navigation"
import ToDosContainer from "./ToDosContainer"
import ToDonesContainer from './ToDonesContainer';



function App() {
  return (
    <div className="app">
      <Navigation />
      <ToDosContainer />
      <ToDonesContainer />
    </div>
  );
}

export default App;
