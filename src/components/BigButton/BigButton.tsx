import React from 'react';

import './BigButton.style.scss';

interface BigButtonProps {
  children: React.ReactNode|React.ReactNodeArray;
}

export const BigButton = (props: BigButtonProps) => {
  const { children } = props;
  return (
    <button className="big-button text-center mt-16 mb-8 md:mt-24 text-white max-h-12">
      {children}
    </button>
  );
}
