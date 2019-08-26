import React from 'react';

const LazyAbout = React.lazy(() => import(/* webpackChunkName: "About" */ './About'));
const LazyHome = React.lazy(() => import(/* webpackChunkName: "Home" */ './Home'));
const LazyLanding = React.lazy(() => import(/* webpackChunkName: "Landing" */ './Landing'));
const LazyLandingPortfolio = React.lazy(() => import(/* webpackChunkName: "LandingPortfolio" */ './LandingPortfolio'));

export const IndexPage: React.FC = () => (
  <>
    <LazyHome />
    <LazyLanding />
    <LazyAbout />
    <LazyLandingPortfolio />
  </>
);
