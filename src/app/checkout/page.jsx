"use client";
import { CartCard } from "@/components/CartCard";
import CheckOutForm from "@/components/CheckOutForm";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";

const CheckOut = () => {
  const { total, cartList } = useCart();

  return (
    <div className="flex flex-col lg:flex-row justify-center md:justify-around mt-8">
      <div className="flex flex-col ml-4 pl-3 items-center justify-center">
        <h1 className=" text-2xl font-bold mb-4">Checkout Items</h1>

        {cartList.length === 0 ? (
          <Link href="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold mb-7">
              Add items
            </button>
          </Link>
        ) : (
          cartList.map((product) => (
            <CartCard product={product} key={product.id} cart />
          ))
        )}
      </div>
      <div className="flex flex-col gap-4">
        <CheckOutForm total={total} cartList={cartList} />
      </div>
    </div>
  );
};

export default CheckOut;
