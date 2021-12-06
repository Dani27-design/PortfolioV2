import React from 'react'
import Header from './Components/Header';
import Project from './Components/Project';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Project />
      </div>
    </Router>
  )
}

export default App
