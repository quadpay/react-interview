import { render, screen } from '@testing-library/react';
import App from './App';

test('should render and display input label', () => {
  render(<App />);
  const labelElement = screen.getByTestId("input-label");
  expect(labelElement.textContent).toContain('How much do you plan to spend?');
});
