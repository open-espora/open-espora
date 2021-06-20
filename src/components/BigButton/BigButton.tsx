import React from 'react';

import './BigButton.style.scss';

interface BigButtonProps {
  children: React.ReactNode|React.ReactNodeArray;
}

function BigButton(props: BigButtonProps) {
  return (
    <button className="bigbutton text-center mt-16 mb-8 md:mt-24 text-white max-h-12">
      {props.children}
    </button>
  );
}

export default BigButton;
