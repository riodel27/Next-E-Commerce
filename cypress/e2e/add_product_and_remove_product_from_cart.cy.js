describe("Remove product from cart page", () => {
  describe("when the cart is empty", () => {
    // verify that the cart is empty
  });

  // Not sure if this is the correct approach.
  // But this is a work around for now as it is difficult to perform an E2E test
  // if the data is coming from a global state like React Context Provider.
  describe("when the cart is not empty", () => {
    it("should display the items in the cart and allow items to be removed", () => {
      // visit the cart page to ensure that the cart is empty
      cy.visit("http://localhost:3000/cart");
      cy.get(".product-list").should("not.exist");
      cy.get('[data-testid="cart-count"]').should("have.text", "0");

      // visit the product page and add an item to the cart
      cy.visit("http://localhost:3000/products/1");
      cy.get('[data-testid="add-to-cart-button"]').click();
      cy.get('[data-testid="cart-count"]').invoke("text").should("equal", "1");

      // visit the cart page and confirm that the item is in the cart
      cy.get('[data-testid="cart-count"]').click();
      cy.get(".product-list").should("have.length", 1);
      cy.get('[data-testid="remove-item-from-cart-button"]').should("exist");

      // remove the item from the cart
      cy.get('[data-testid="remove-item-from-cart-button"]').click();

      // confirm that the cart is empty again
      cy.get('[data-testid="cart-count"]').should("have.text", "0");
      cy.get(".product-list").should("not.exist");
    });
  });
});
