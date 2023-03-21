const mockProductData = [
  { id: 1, name: "Product 1", price: 10.0 },
  { id: 2, name: "Product 2", price: 20.0 },
  { id: 3, name: "Product 3", price: 30.0 },
];

export const fetchProducts = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockProductData);
    }, 1000);
  });
};
