import React from "react";
import { getByText, render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const registrationForm = getByText("User Registration Form");
  expect(registrationForm).toBeInTheDocument();
});
