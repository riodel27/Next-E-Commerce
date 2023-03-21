import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { Product } from "@/interfaces";

type ProductData = Product[] | null;

interface ProductError {
  message: string;
  // You may want to include other error properties here
}

const useProductData = (): [ProductData, ProductError | null] => {
  const [products, setProducts] = useState<ProductData>(null);
  const [error, setError] = useState<ProductError | null>(null);

  const fetchProductData = async () => {
    try {
      const response = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(response.data);
    } catch (error) {
      const axiosError = error as AxiosError<ProductError>;
      setError(axiosError.response?.data || { message: axiosError.message });
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return [products, error];
};

export default useProductData;
