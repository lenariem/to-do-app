import React from 'react';
import "../css/App.scss";
import Navigation from "./Navigation"
import ToDosContainer from "./ToDosContainer"



function App() {
  return (
    <div className="app">
      <Navigation />
      <ToDosContainer />
    </div>
  );
}

export default App;
