import * as React from 'react';

const LazyIndexPage = React.lazy(() => import(/* webpackChunkName: "HomePage" */ './pages/Index'));
const LazyPortfolioPage = React.lazy(() => import(/* webpackChunkName: "PortfolioPage" */ './pages/Portfolio'));

export { LazyIndexPage, LazyPortfolioPage };
