import React, { createContext, useState, FC } from "react";

type CartContextType = {
  count: number;
  addToCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType>({
  count: 0,
  addToCart: () => {},
});

type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

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
