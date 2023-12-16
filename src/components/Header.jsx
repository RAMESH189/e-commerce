"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { total } = useCart();
  return (
    <header className="flex justify-between p-4 bg-red-700 font-bold text-xl text-white">
      <div className="flex gap-4 justify-center items-center">
        <Link href="/">
          <div>
            <p>
              Dil App<span>☘</span>
            </p>
          </div>
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <Link href="/checkout">
          <button
            disabled={total === 0}
            className="disabled:bg-gray-400 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 mx-3 rounded-md border-none"
          >
            Checkout
          </button>
        </Link>
        <Link href="/cart">
          <div className="flex cursor-pointer">
            <span>🛒</span>
            <p>${total.toFixed(2)}</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
