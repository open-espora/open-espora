import React from 'react';

import logo from '../../assets/logo.svg';

function HomeHeader() {
    return (
    <header className="flex justify-center pt-16 pb-8 md:pt-24 md:pb-16">
        <img className="w-32" src={logo} />
    </header>
  );
}

export default HomeHeader;
