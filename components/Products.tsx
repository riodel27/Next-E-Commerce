import Image from "next/image";
import React from "react";
import axios from "axios";
import useProductData from "@/hooks/useProductData";
import { useRouter } from "next/router";
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
          <div className="relative h-64 w-full">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900">{product.title}</h3>
            <p className="text-gray-500">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
