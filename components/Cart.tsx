import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

function Cart() {
  const router = useRouter();

  const { count } = useContext(CartContext);

  return (
    <>
      <button className="relative w-8 h-8" onClick={() => router.push("/cart")}>
        <svg
          className="h-6 w-6 fill-current text-gray-200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 6h2.31a3 3 0 0 1 5.38 0H18a1.5 1.5 0 0 1 0 3H6a1.5 1.5 0 0 1 0-3zm0 6h12a1.5 1.5 0 0 1 0 3H6a1.5 1.5 0 0 1 0-3z" />
        </svg>
        <span
          data-testid="cart-count"
          className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-500 text-white text-xs rounded-full text-center"
        >
          {count}
        </span>
      </button>
    </>
  );
}

export default Cart;
