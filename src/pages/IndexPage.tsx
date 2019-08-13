import React from 'react';
import { Home } from './Home';
import { Landing } from './Landing';
import { About } from './About';
import { LandingPortfolio } from './LandingPortfolio';

export const IndexPage: React.FC = () => (
  <>
    <Home />
    <Landing />
    <About />
    <LandingPortfolio />
  </>
);
