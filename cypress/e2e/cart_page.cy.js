// This is an example Cypress test file for testing the cart page
import { mount } from "@cypress/react";
import React from "react";

describe("Cart page", () => {
  describe("when the cart is empty", () => {
    it("should display a message saying the cart is empty", () => {
      cy.visit("http://localhost:3000/cart");
      cy.contains("Your cart is empty");
    });
  });

  describe("when the cart is not empty", () => {
    // MOUNT Component instead of visit?

    //TODO: I guess this will have to be moved as  Component Testing since it requires react state and will be difficult to mock the data.
    it("should display the items in the cart and allow items to be removed", () => {
      // cy.mount(<MyComponent />);
      // // Assert that the correct items are displayed in the cart
      // cy.contains("item1");
      // cy.contains("$5");
      // cy.contains("1");
      // cy.contains("item2");
      // cy.contains("$10");
      // cy.contains("1");
      // // Remove an item from the cart
      // cy.get('[data-test="remove-from-cart-button"]').first().click();
      // cy.contains("Your cart is empty");
      // // Assert that the correct item was removed from the cart
      // cy.contains("item1").should("not.exist");
      // cy.contains("$5").should("not.exist");
      // cy.contains("1 item in cart");
      // // Remove the other item from the cart
      // cy.get('[data-test="remove-from-cart-button"]').first().click();
      // cy.contains("Your cart is empty");
    });

    // it("should allow the quantity of items to be changed", () => {
    //   cy.visit("/cart");

    //   // Increase the quantity of the first item in the cart
    //   cy.get('[data-test="increase-quantity-button"]').first().click();
    //   cy.contains("2");

    //   // Decrease the quantity of the second item in the cart
    //   cy.get('[data-test="decrease-quantity-button"]').last().click();
    //   cy.contains("1");

    //   // Remove the items from the cart
    //   cy.get('[data-test="remove-from-cart-button"]').click({ multiple: true });
    //   cy.contains("Your cart is empty");
    // });

    // it("should update the total whenever the quantity or items in the cart change", () => {
    //   cy.visit("/cart");

    //   // Assert that the correct total is initially displayed
    //   cy.contains("Total: $15");

    //   // Increase the quantity of the first item in the cart
    //   cy.get('[data-test="increase-quantity-button"]').first().click();
    //   cy.contains("Total: $20");

    //   // Remove the first item from the cart
    //   cy.get('[data-test="remove-from-cart-button"]').first().click();
    //   cy.contains("Total: $10");
    // });
  });
});
