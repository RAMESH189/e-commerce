"use client";
import { CartCard } from "@/components/CartCard";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function Cart() {
  const { total, cartList } = useCart();
  console.log("cart", cartList);

  return (
    <main className="w-full">
      <div>
        <h1 className="flex items-center text-center justify-center text-2xl font-bold py-3">
          Cart Items : {cartList.length} Items/ {total.toFixed(2)}$
        </h1>

        <div>
          {cartList.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
