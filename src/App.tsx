import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PhotoAlbumPage } from './pages/Portfolio/PhotoAlbumPage';
import { Layout } from './components/Layout';
import { ChunkLoader } from './ChunkLoader';
import { LazyIndexPage, LazyPortfolioPage } from './lazyPages';

export const App: React.FC = () => (
  <BrowserRouter>
    <React.Suspense fallback={<ChunkLoader />}>
      <Layout>
        <Route path="/" exact component={LazyIndexPage} />
        <Route path="/portfolio" exact component={LazyPortfolioPage} />
        <Route path="/portfolio/:id" exact component={PhotoAlbumPage} />
      </Layout>
    </React.Suspense>
  </BrowserRouter>
);
