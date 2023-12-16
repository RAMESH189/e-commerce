import React from "react";

import Image from "next/image";
import { getProduct } from "@/util/util";

const productItem = async ({ params }) => {
  const productId = params.id;
  const product = await getProduct(productId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={product.image}
          width={500}
          height={300}
          className="rounded-lg border border-black p-4 shadow-md"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          alt="Movie poster"
        />
        <div className="p-4">
          <h2 className="mb-4 font-bold text-xl">{product.title}</h2>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4 font-bold">Price: {product.price}$</p>
          <p className="font-bold">Rating : {product.rate || "No rating"}</p>
        </div>
      </div>
    </div>
  );
};

export default productItem;
