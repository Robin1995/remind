import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tittle', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Remember/i);
  expect(linkElement).toBeInTheDocument();
});
