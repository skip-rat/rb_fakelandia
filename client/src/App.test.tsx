import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const misdemElement = screen.getByText(/Misdemeanours/);
  expect(misdemElement).toBeInTheDocument();

  const confElement = screen.getByText(/Confession/i);
  expect(confElement).toBeInTheDocument();
});
