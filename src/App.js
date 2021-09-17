import React from 'react'
import './App.css';
// import Nav from "./comp/nav"
// import Foot from "./comp/Foot";
// import react from 'react';
import Home from "./comp/home"
import Contact from "./comp/contact"
import About from "./comp/about"
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() 
{
  return (
    <div className="App">
      <Router>
        <Route path="/home" exact component={Home}/>
      </Router>
      <Router>
        <Route path="/" exact component={Home}/>
      </Router>
      <Router>
        <Route path="/about" exact component={About}/>
      </Router>
      <Router>
        <Route path="/contact" exact component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
