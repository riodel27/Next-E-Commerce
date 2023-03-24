import Image from "next/image";
import { Product as IProduct } from "@/interfaces";
import Product from "@/components/Product";

export default function ProductPage({ product }: { product: IProduct }) {
  return (
    <>
      <Product product={product} />
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
