import React from 'react';
import './Home.scss';

import App from '../../components/App/App';

function Home() {
  return (
    <main className="Home">
      <header className="Home-header">
        <h1>Open Espora</h1>
      </header>
      <section className="Home-content">
        <App />
      </section>
    </main>
  );
}

export default Home;
