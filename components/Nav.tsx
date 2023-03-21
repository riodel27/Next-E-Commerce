import { useRouter } from "next/router";
import React from "react";
import Cart from "./Cart";

function Nav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          className="h-8 w-8 mr-2"
          src="https://picsum.photos/50"
          alt="Logo"
        />
        <span className="font-semibold text-xl tracking-tight">My Store</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            onClick={() => router.push("/products")}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 cursor-pointer"
          >
            Products
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
          >
            Contact Us
          </a>
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
