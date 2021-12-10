import React, { useState, useEffect, lazy, Suspense } from 'react'
import Loading from './Components/Loading';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Header = lazy(() => import('./Components/Header'));
const Project = lazy(() => import('./Components/Project'));
const Certification = lazy(() => import('./Components/Certification'));
const Contact = lazy(() => import('./Components/Contact'));
const Footer = lazy(() => import('./Components/Footer'));

function App() {

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div className='App'>
          <Header />
          <Project />
          <Certification />
          <Contact />
          <Footer />
        </div>
      </Suspense>
    </Router>
  )
}

export default App
