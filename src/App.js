import React from 'react'
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
      </div>
    </Router>
  )
}

export default App
