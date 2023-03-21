import Image from "next/image";
import { Product as IProduct } from "@/interfaces";
import Product from "@/components/Product";

// What is the approach when testing like individual product page?

// is it making sure that all elements is displayed?
// now how do I make sure that from this page when add to cart is clicked it will work??

export default function ProductPage({ product }: { product: IProduct }) {
  const handleAddToCart = (product: Product) => {
    // 1. The "Add to cart" button is clickable and triggers the handleAddToCart function.
    // 1. make sure that it is added to the cart.
    // 2. If it is successfully added to the cart, make sure the button is disabled.
    // extra test case scenario
    // 3. let's say on render or Re-render if this product already exist on the cart make sure the button is disabled.
  };

  return (
    <>
      <Product product={product} handleAddToCart={handleAddToCart} />
    </>
  );
}

export async function getStaticPaths() {
  // Fetch the IDs of all products from the API
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const ids = products.map((product: Product) => product.id);

  // Generate a list of paths for all products
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  // Fetch the product data for the given ID
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return { props: { product } };
}
