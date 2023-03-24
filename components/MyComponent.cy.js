// This is an example Cypress test file for testing the cart page
import { mount } from "@cypress/react";
import React from "react";

import MyComponent from "./MyComponent";

describe("<MyComponent />", () => {
  it("should render MyComponent", () => {
    cy.mount(<MyComponent />);
  });
});
