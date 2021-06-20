import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from './Root';
import '@testing-library/jest-dom';
test('renders learn react link', () => {
  render(<Root />);
  const linkElement = screen.getByText(/Start your journey/i);
  expect(linkElement).toBeInTheDocument();
});
