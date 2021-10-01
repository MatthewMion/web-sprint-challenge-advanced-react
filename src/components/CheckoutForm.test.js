import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const firstNameInput = screen.queryByLabelText(/first name:/i);
  userEvent.type(firstNameInput, "abcde");
  const lastNameInput = screen.queryByLabelText(/last name:/i);
  userEvent.type(lastNameInput, "zyxwv");
  const addressInput = screen.queryByLabelText(/address:/i);
  userEvent.type(addressInput, "1234 Sesame Street");
  const cityInput = screen.queryByLabelText(/city:/i);
  userEvent.type(cityInput, "Sesame");
  const stateInput = screen.queryByLabelText(/state:/i);
  userEvent.type(stateInput, "Florida");
  const zipInput = screen.queryByLabelText(/zip:/i);
  userEvent.type(zipInput, "33067");
  const button = screen.getByRole("button");
  userEvent.click(button);
  const successMessageFeedback = await screen.queryByTestId("successMessage");
  expect(successMessageFeedback).toBeInTheDocument();
});
