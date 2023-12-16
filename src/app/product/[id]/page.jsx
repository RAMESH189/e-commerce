import Image from "next/image";
import React from "react";

async function getProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return await data;
}

const productItem = async ({ params }) => {
  const productId = params.id;
  const product = await getProduct(productId);
  console.log(product);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={product.image}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          alt="Movie poster"
        />
        <div className="p-4">
          <h2 className="mb-4 font-bold text-xl">
            {product.title}
          </h2>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4 font-bold">Price: {product.price}$</p>
          <p>Rating : {product.rate || 'No rating'}</p>
        </div>
      </div>
    </div>
  )
};

export default productItem;
