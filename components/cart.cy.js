import React from "react";
import { mount } from "@cypress/react";
import CartItems from "../components/Cart/CartItems";

describe("CartItems component", () => {
  const products = [
    {
      id: 1,
      title: "Item 1",
      price: 10.0,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 2,
      title: "Item 2",
      price: 20.0,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
  ];

  beforeEach(() => {
    // cy.intercept(products[0].image, { fixture: "item1.jpg" }).as("item1Image");
    // cy.intercept(products[1].image, { fixture: "item2.jpg" }).as("item2Image");

    mount(<CartItems products={products} handleRemoveFromCart={() => {}} />);
  });

  it("displays the correct number of products", () => {
    cy.get(".product-list").children().should("have.length", products.length);
  });

  it("displays the correct product information", () => {
    products.forEach((product) => {
      cy.get(".product-list")
        .contains(".text-gray-900", product.title)
        .should("be.visible");

      cy.get(".product-list")
        .contains(".text-gray-700", `$${product.price.toFixed(2)}`)
        .should("be.visible");

      cy.get(".product-list").contains("button", "Remove").should("be.visible");
    });
  });
});

// TODO: read this blog below...

// https://www.cypress.io/blog/2023/02/16/component-testing-next-js-with-cypress/
