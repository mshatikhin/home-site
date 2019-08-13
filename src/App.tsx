import React from 'react';
import { PortfolioPage } from './pages/Portfolio';
import { BrowserRouter, Route } from 'react-router-dom';
import { PhotoAlbumPage } from './pages/Portfolio/PhotoAlbumPage';
import { IndexPage } from './pages/IndexPage';
import { Layout } from './pages/Layout';

export const App: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" exact component={IndexPage} />
      <Route path="/portfolio" exact component={PortfolioPage} />
      <Route path="/portfolio/:id" exact component={PhotoAlbumPage} />
    </Layout>
  </BrowserRouter>
);
