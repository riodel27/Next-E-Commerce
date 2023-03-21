import React from "react";
import Cart from "./Cart";
import { CartProvider } from "../contexts/CartContext";
import Nav from "./Nav";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Nav />

      <main>{children}</main>
    </div>
  );
}

export default Layout;
