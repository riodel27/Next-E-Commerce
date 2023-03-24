import { Product } from "@/interfaces";
import React, { createContext, useState, FC, ReactNode } from "react";

export type CartContextType = {
  count: number;
  products: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType>({
  count: 0,
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

interface CartProviderProps {
  children: ReactNode;
  cartState?: CartState;
}

export interface CartState {
  count?: number;
  products?: Product[];
  addToCart?: (product: Product) => void;
  removeFromCart?: (productId: number) => void;
}

const CartProvider: FC<CartProviderProps> = ({ children, cartState = {} }) => {
  const {
    count = 0,
    products = [],
    addToCart = () => {},
    removeFromCart = () => {},
  } = cartState;

  const [cartCount, setCartCount] = useState<number>(count);
  const [cartProducts, setCartProducts] = useState<Product[]>(products);

  const handleAddToCart = (product: Product) => {
    const productExists = cartProducts.some((p) => p.id === product.id);

    if (!productExists) {
      setCartProducts([...cartProducts, product]);
      setCartCount(cartCount + 1);
      addToCart(product);
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    const newProducts = cartProducts.filter((p) => p.id !== productId);

    if (newProducts.length !== cartProducts.length) {
      setCartProducts(newProducts);
      setCartCount(cartCount - 1);
      removeFromCart(productId);
    }
  };

  return (
    <CartContext.Provider
      value={{
        count: cartCount,
        products: cartProducts,
        addToCart: handleAddToCart,
        removeFromCart: handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
