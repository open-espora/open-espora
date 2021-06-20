import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import homeImage from '../../assets/homeImage.svg';
import './Home.style.scss';

import HomeHeader from '../../components/HomeHeader/HomeHeader';
import BigButton from '../../components/BigButton/BigButton';

function Home() {
  return (
      <main className="home h-screen">
        <HomeHeader />
        <section className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-xl text-white pb-4"> Start your journey </h2>
          <h3 className="text-xl text-white pb-8 md:pb-16"> Search, choose, learn </h3>
          <img src={homeImage} />
          <div>
            <BigButton>
              Get Started
            </BigButton>
          </div>
        </section>
      </main>
  );
}

export default Home;
