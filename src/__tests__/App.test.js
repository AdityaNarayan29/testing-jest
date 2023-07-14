import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Tests if Login Component is rendering
it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Login Page')).toBeInTheDocument();
});