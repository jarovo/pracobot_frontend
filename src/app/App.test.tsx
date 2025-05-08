import '@testing-library/jest-dom'

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contacts/i);
  expect(linkElement).toBeInTheDocument();
});
