import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import En from './pages/en/page';
import Fr from './pages/fr/page';
import Ar from './pages/ar/page';
import favicon from '../public/favicon.ico';

function App() {

  
  const componentDidMount = () => {
    const link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.href = favicon;
    document.head.appendChild(link);
  }
  
  componentDidMount();
  
  console.log = function() {};
  console.error = function() {};
  console.warn = function() {};
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/en" element={<En />} />
        <Route path="/fr" element={<Fr />} />
        <Route path="/ar" element={<Ar />} />
        <Route path="/*"  element={<En />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App