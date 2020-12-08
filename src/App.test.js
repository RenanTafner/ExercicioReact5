import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from "./App";

test('renders the phrase "Movies API Application"', () => {
  const { container, getByText } = render(<App />)
  expect(getByText('Movies API Application')).toBeInTheDocument()
})