"use client";
import { CartCard } from "@/components/CartCard";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";

const CheckOut = () => {
  const { total, cartList } = useCart();

  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-8 max-w-screen-sm">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="mb-8 w-full">
        {cartList.map((product) => (
          <CartCard product={product} key={product.id} cart />
        ))}
      </div>

      <h2 className="text-xl font-bold mb-2">Total: {total.toFixed(2)}$</h2>

      <div>
        <h2 className="text-xl font-bold mb-4">Shipping and Payment</h2>
      </div>

      {cartList.length === 0 ? (
        <Link href="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold">
            Add items
          </button>
        </Link>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold"
          type="submit"
        >
          Place Order
        </button>
      )}
    </div>
  );
};

export default CheckOut;
