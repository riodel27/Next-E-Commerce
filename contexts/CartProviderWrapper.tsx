import { Product } from "@/interfaces";
import { useContext } from "react";
import { CartContext, CartProvider, CartState } from "./CartContext";

interface CartProviderWrapperProps {
  additionalData?: Product[];
  children: React.ReactNode;
}

/**
 * A wrapper component for the CartProvider that allows for additional data to be passed in.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render within the CartProvider.
 * @param {Product[]} [props.additionalData] - Optional additional product data to add to the cart.
 * @returns {JSX.Element} - The rendered component.
 */
const CartProviderWrapper = ({
  children,
  additionalData,
}: CartProviderWrapperProps) => {
  // Get the original cart state and functions
  const originalCartState = useContext(CartContext);

  // Add the additional data to the products array if it exists and is an array
  const newProducts =
    additionalData && Array.isArray(additionalData)
      ? [...originalCartState.products, ...additionalData]
      : originalCartState.products;

  // Pass down the original cart state and functions, along with the updated products array
  const cartState: CartState = {
    count: newProducts.length,
    products: newProducts,
    addToCart: originalCartState.addToCart,
    removeFromCart: originalCartState.removeFromCart,
  };

  // Render the CartProvider with the original cart state and functions, plus the additional data
  return <CartProvider cartState={cartState}>{children}</CartProvider>;
};

export default CartProviderWrapper;
