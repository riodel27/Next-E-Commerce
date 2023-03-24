import { Product } from "@/interfaces";
import React, { useContext } from "react";
import Image from "next/image";

import { CartContext } from "@/contexts/CartContext";

function Product({ product }: { product: Product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:w-1/2 px-4">
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={600}
            />
          </div>
          <div className="md:w-1/2 px-4 mt-8 md:mt-0">
            <h1 className="text-2xl font-bold text-gray-900">
              {product.title}
            </h1>
            <p className="text-gray-500">${product.price.toFixed(2)}</p>
            <p className="mt-4 text-gray-700">{product.description}</p>
            <button
              data-testid="add-to-cart-button"
              className="mt-8 mr-2 py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-500"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
