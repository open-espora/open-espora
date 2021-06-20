import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './Root.style.scss';

import Home from '../Home/Home';

function Root() {
  return (
    <Router>
      <main className="Root">
        <Route path="/" exact component={Home} />
      </main>
    </Router>
  );
}

export default Root;