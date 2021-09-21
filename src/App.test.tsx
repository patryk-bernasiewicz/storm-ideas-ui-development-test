import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the default heading", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to PatrykB's CRA Template./i);
  expect(linkElement).toBeInTheDocument();
});
