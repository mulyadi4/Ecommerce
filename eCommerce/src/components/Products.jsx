import React from 'react'

const Products = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded shadow text-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="mx-auto mb-2"
          />
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
          <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Beli
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products
