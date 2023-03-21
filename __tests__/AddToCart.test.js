import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Cart from "../components/Cart";
import { CartProvider } from "../contexts/CartContext";
import Product from "../components/Product";

describe("Add product to cart", () => {
  it("should add product to cart and increment cart count", () => {
    const product = {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    };

    render(
      <>
        <CartProvider>
          <Cart />
          <Product product={product} />
        </CartProvider>
      </>
    );

    fireEvent.click(screen.getByTestId("add-to-cart-button"));

    expect(screen.getByTestId("cart-count")).toHaveTextContent("1");
  });
});
