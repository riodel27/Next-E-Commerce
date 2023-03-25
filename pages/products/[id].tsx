import { Product as IProduct } from "@/interfaces";
import Product from "../../components/Product";

export default function ProductPage({ product }: { product: IProduct }) {
  return (
    <>
      <Product product={product} />
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const paths = products.map((product: IProduct) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params = { id: "" } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return { props: { product } };
}
