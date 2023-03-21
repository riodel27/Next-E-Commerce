describe("Add to cart", () => {
  it("should add product to cart and increment cart count", () => {
    cy.visit("http://localhost:3000/products/1");

    cy.get('[data-testid="add-to-cart-button"]').click();

    cy.get('[data-testid="cart-count"]').should("have.text", "1");
  });
});
