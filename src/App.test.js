import { render, screen } from '@testing-library/react';
import App from './App';
import SamuraiJSAPP from "./App";
import React from "react";

test('renders learn react link', () => {
  render(<SamuraiJSAPP />);
  const linkElement = screen.getByRole(/main/i);
  expect(linkElement).toBeInTheDocument();
});
