import { render, screen } from '@testing-library/react';
import App from './App';

test('First React App Test Case', () => {
  render(<App />);
  const text = screen.getByText(/First React App Test Case/i);
  const title = screen.getByTitle(/Ai image/i)
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
