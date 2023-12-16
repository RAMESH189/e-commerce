import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
     <div
      className="max-w-7xl mx-auto py-4 sm:grid sm:grid-cols-2
          md:grid-cols-3 lg:grid-cols-4"
    >
      {data.map((data) => (
        <ProductCard key={data.id} data={data} />
      ))}
    </div>
  )
}

export default ProductList