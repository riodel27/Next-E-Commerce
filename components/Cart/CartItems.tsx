import { Product } from "@/interfaces";
import Image from "next/image";
import React from "react";

interface ProductsProps {
  products: Product[];
  handleRemoveFromCart: (productId: number) => void;
}

function CartItems({ products, handleRemoveFromCart }: ProductsProps) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 product-list">
          {products.map((product) => (
            <div
              data-testid="cart-product-wrapper"
              key={product.id}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={200}
              />
              <div className="p-4">
                <h2 className="text-gray-900 font-semibold text-lg mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-700 font-medium text-base mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  data-testid={`remove-item-from-cart-button`}
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CartItems;
