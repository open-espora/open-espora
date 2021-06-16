import React from 'react';
import './home.scss';

import App from '../../components/app/app';

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
