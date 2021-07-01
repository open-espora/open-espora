import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './Root.style.scss';

import { Home } from '../Home/Home';

export const Root = () => {
  return (
    <Router>
      <main className="Root">
        <Route path="/" exact component={Home} />
      </main>
    </Router>
  );
}
