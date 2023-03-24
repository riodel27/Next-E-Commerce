import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

import useProductData from "@/hooks/useProductData";
import { Product } from "@/interfaces";

function Products() {
  const router = useRouter();

  const [products, error] = useProductData();

  if (error) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center" data-testid="product-list">
      {products?.map((product: Product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden m-4 cursor-pointer"
          onClick={() => router.push(`products/${product.id}`)}
        >
          <div className="relative h-64">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 text-lg mb-2">
              {product.title}
            </h3>
            <p className="text-gray-500 font-medium text-base">
              ${product.price}
            </p>
            <div className="flex justify-end mt-4">
              <button className="bg-gray-900 text-white rounded-md px-4 py-2 text-sm">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
