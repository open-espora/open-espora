import React from 'react';
import { render, screen } from '@testing-library/react';
import BigButton from './BigButton';

test('renders learn react link', () => {
  render(<BigButton> sample text </BigButton>);
  const linkElement = screen.getByText(/sample text/i);
  expect(linkElement).toBeInTheDocument();
});
