import React, { useContext } from "react";

import { CartContext } from "../contexts/CartContext";
import CartItems from "@/components/Cart/CartItems";

function Cart() {
  const { count, products, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div className="min-h-screen">
      {!products.length ? (
        <>
          <h2>Your cart is empty</h2>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-8">Your Cart Items</h1>
          <CartItems
            products={products}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </>
      )}
    </div>
  );
}

export default Cart;
