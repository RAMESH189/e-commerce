"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cartList, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productInCartCheck = cartList.find(
      (cartItem) => cartItem.id === product.id
    );
    if (productInCartCheck) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div
      className="sm:p-3 sm:hover:shadow-slate-400 sm:hover:bg-slate-100
     sm:shadow-md rounded-lg sm:border
     sm:border-slate-400 sm:m-2 transition-shadow duration-200 group"
    >
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          width={500}
          height={300}
          className="rounded-t-lg"
          alt="No Image available"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Link>
      <div className="p-2">
        <h2 className=" font-bold py-1">{product.title}</h2>
        <p className="line-clamp-4">{product.description}</p>
        <div className="flex justify-between items-center mt-5">
          <span className="font-bold">{product.price}$</span>
          {isInCart ? (
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md"
              onClick={() => removeFromCart(product)}
            >
              Remove
            </button>
          ) : (
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white py-1 px-2 rounded-md"
              onClick={() => addToCart(product)}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
