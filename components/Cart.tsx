import { CartContext } from "@/contexts/CartContext";
import React, { useContext } from "react";

function Cart() {
  const { count } = useContext(CartContext);

  return (
    <>
      <p>
        Cart : <span data-testid="cart-count">{count}</span>
      </p>
    </>
  );
}

export default Cart;
