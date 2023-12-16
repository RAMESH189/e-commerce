import Image from "next/image";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export const CartCard = ({ product, cart }) => {
  const { removeFromCart } = useCart();

  return (
    <>
      {cart ? (
        <div className="flex justify-between items-center shadow-md border border-b-4 p-2 rounded-md my-8 mx-4 hover:bg-gray-100">
          <Link href={`/product/${product.id}`}>
            <Image src={product.image} width={100} height={100} />
          </Link>
          <p className="font-bold">Item Price: {product.price}$</p>
          <button
            className="px-2 py-1 bg-red-500 hover:bg-red-600 font-semibold text-white border border-none rounded-md"
            onClick={() => removeFromCart(product)}
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center shadow-md border border-b-4 p-2 rounded-md my-8 mx-4 hover:bg-gray-100">
          <Link href={`/product/${product.id}`}>
            <Image src={product.image} width={100} height={100} />
          </Link>
          <p className="font-semibold hidden md:flex ">{product.title}</p>
          <p className="font-bold">{product.price}$</p>
          <button
            className="px-2 py-1 bg-red-500 hover:bg-red-600 font-semibold text-white border border-none rounded-md"
            onClick={() => removeFromCart(product)}
          >
            Remove
          </button>
        </div>
      )}
    </>
  );
};
