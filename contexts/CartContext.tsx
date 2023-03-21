import React, { createContext, useState } from "react";

type CartContextType = {
  count: number;
  addToCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType>({
  count: 0,
  addToCart: () => {},
});

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const addToCart = (productId: number) => {
    setCount(count + 1);
  };

  return (
    <CartContext.Provider value={{ count, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
