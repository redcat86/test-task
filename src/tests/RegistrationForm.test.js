import React from "react";
import { getByText, render } from "@testing-library/react";
import RegistrationForm from "../RegistrationForm";

test("There is no username field", () => {
  const { getByLabelText } = render(<RegistrationForm onSubmit={() => {}} />);

  expect(getByLabelText(/Username/i, { selector: "input" })).toBeTruthy();
});

test("There is no password field", () => {
  const { queryAllByLabelText, getByLabelText } = render(
    <RegistrationForm onSubmit={() => {}} />
  );

  const result = expect(queryAllByLabelText(/Password/i));
  result.toBeTruthy();
  result.not.toHaveLength(1);
});

test("There is no password confirmation field", () => {
  const { getByLabelText } = render(<RegistrationForm onSubmit={() => {}} />);

  expect(getByLabelText(/Password Confirmation/i)).toBeTruthy();
});

test("There is no first name field", () => {
  const { getByLabelText } = render(<RegistrationForm onSubmit={() => {}} />);

  expect(getByLabelText(/First Name/i)).toBeTruthy();
});

test("There is no email field", () => {
  const { getByLabelText } = render(<RegistrationForm onSubmit={() => {}} />);

  expect(getByLabelText(/Email address/i)).toBeTruthy();
});
