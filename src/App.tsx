import React, { Component } from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';

const App: React.FC = () => (
  <div>
    <Header />
    <Home />
    <About />
  </div>
);

export default App;
