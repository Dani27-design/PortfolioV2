import React, { useState, useEffect } from 'react'
import Loading from './Components/Loading';
import Header from './Components/Header';
import Project from './Components/Project';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Certification />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App
