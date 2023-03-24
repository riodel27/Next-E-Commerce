import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import { CartContext, CartProvider } from "../contexts/CartContext";
import CartPage from "../pages/cart";
import Cart from "../components/Cart";
import CartItems from "../components/Cart/CartItems";
import CartProviderWrapper from "../contexts/CartProviderWrapper";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    pathname: "",
  }),
}));

describe("Cart page", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("when the cart is empty", () => {
    it("should display a message saying the cart is empty", () => {
      const cartContext = { getState: jest.fn(() => ({ items: [] })) };

      render(
        <CartProvider>
          <CartPage />
        </CartProvider>,
        { cartContext }
      );

      const message = screen.getByText("Your cart is empty");
      expect(message).toBeInTheDocument();
    });
  });

  describe("when the cart is not empty", () => {
    it("should display the items in the cart and allow items to be removed", async () => {
      const removeFromCart = jest.fn();

      const mockCartState = {
        count: 2,
        products: [
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
        ],
      };

      render(
        <CartContext.Provider value={mockCartState}>
          <Cart />
          <CartItems
            products={mockCartState.products}
            handleRemoveFromCart={removeFromCart}
          />
        </CartContext.Provider>
      );

      const item1Elements = screen.queryAllByText(/Item 1/i);
      expect(item1Elements.length).toBeGreaterThan(0);

      const price1Element = screen.queryAllByText(/10/i);
      expect(price1Element.length).toBeGreaterThan(0);

      const item2Elements = screen.queryAllByText(/Item 2/i);
      expect(item2Elements.length).toBeGreaterThan(0);

      const price2Element = screen.queryAllByText(/20/i);
      expect(price2Element.length).toBeGreaterThan(0);

      // Get all remove buttons with the specified data-testid value
      const removeButtons = screen.getAllByTestId(
        "remove-item-from-cart-button"
      );

      // Expect the number of remove buttons to match the number of items in the cart
      expect(removeButtons.length).toBe(mockCartState.products.length);

      // Click the first remove button and verify that the item is removed from the cart
      const firstRemoveButton = removeButtons[0];

      // might necessary to use await when using userEvent.click since it's async.
      await userEvent.click(firstRemoveButton);

      expect(removeFromCart).toHaveBeenCalledTimes(1);
      expect(removeFromCart).toHaveBeenCalledWith(mockCartState.products[0].id);
    });

    it("should decrement cart count after removing items in the cart", async () => {
      // Create additional mock product data
      const additionalItem = [
        {
          id: 1,
          title: "Item 1",
          price: 30.0,
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
        {
          id: 2,
          title: "Item 2",
          price: 30.0,
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
      ];

      // Render the CartPage with the CartProviderWrapper and additional item
      await render(
        <CartProviderWrapper additionalData={additionalItem}>
          <Cart />
          <CartPage />
        </CartProviderWrapper>
      );

      // Get all remove buttons with the specified data-testid value
      const removeButtons = screen.getAllByTestId(
        "remove-item-from-cart-button"
      );

      // Assert that the number of remove buttons matches the number of items in the cart
      expect(removeButtons.length).toBe(2);

      // Click the first remove button and verify that the item is removed from the cart
      const firstRemoveButton = removeButtons[0];

      // Click the remove button
      await userEvent.click(firstRemoveButton);

      // Expect the cart count to be decremented by 1
      expect(screen.getByTestId("cart-count")).toHaveTextContent("1");
    });
  });
});
