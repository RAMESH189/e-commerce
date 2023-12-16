import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
  return (
      <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:hover:bg-slate-100
     sm:shadow-md rounded-lg sm:border
     sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/product/${data.id}`}>
        <Image
          src={data.image}
          width={500}
          height={300}
          className="rounded-t-lg"
          alt="No Image available"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="p-2">
          <h2 className=" font-bold py-1">{data.title}</h2>
          <p className="line-clamp-4">{data.description}</p>
          <div className="flex justify-end items-center">
            <span className="font-bold">{data.price}$</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
