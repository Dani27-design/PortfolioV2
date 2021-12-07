import React, { useState, useEffect } from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import Loading from './Components/Loading';
import Header from './Components/Header';
import Project from './Components/Project';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? <Loading /> : (
    <Router>
      <div className='App'>
        <Header />
        <Project />
      </div>
    </Router>
  )
}

export default App
