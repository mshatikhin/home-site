import React from 'react';
import { Landing } from './pages/Landing';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';

export const App: React.FC = () => (
  <>
    <Home />
    <Landing />
    <About />
    <Portfolio />
  </>
);
