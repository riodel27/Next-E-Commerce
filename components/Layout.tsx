import React from "react";
import Cart from "./Cart";
import { CartProvider } from "../contexts/CartContext";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      {/* Nav */}
      <div>
        <Cart />
      </div>

      <main>{children}</main>
    </div>
  );
}

export default Layout;
