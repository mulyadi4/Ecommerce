import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaPlus, FaStar } from 'react-icons/fa';
import { MdOutlineShoppingCart } from "react-icons/md";
const Products = ({ items }) => {
  
  const [visibleProducts, setVisibleProducts] = useState(8)
  const { addToCart } = useContext(CartContext);
  const sortedProducts = [...items].sort((a, b) => {
    if (a.popular !== b.popular) return b.popular - a.popular
    return b.rating.rate - a.rating.rate
  })

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.slice(0, visibleProducts).map((product) => {
          const discountedPrice = product.discount 
            ? product.price * (1 - product.discount/100)
            : product.price

          return (
            
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-lg transition-shadow">
         

              
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-48 object-contain p-4"
                
                />
        <div className="group flex flex-row gap-2 text-white p-1 rounded-full ring-1 ring-slate-900/5 cursor-pointer">
  <FaPlus  onClick={() => addToCart(product)} className="bg-gray-600 text-white h-7 w-7 p-1.5 rounded-full cursor-pointer" />
  <MdOutlineShoppingCart className="hidden group-hover:flex duration-300 bg-gray-600 text-white h-7 w-7 p-1 rounded-full cursor-pointer" />
</div>

              <div className="p-4">
                <div className="mb-2">
                  <span className="text-sm text-gray-500">{product.brand}</span>
                  <h3 className="font-bold text-lg">{product.title}</h3>
                
                  <p className="text-sm text-gray-500 mt-1">
                     {product.category}
                  </p>
                  
                  {/* Tampilan rating */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>
                          {product.rating.rate >= index + 1 ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.rating.rate.toFixed(1)}) • {product.rating.count} ulasan
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  {product.discount ? (
                    <>
                      <span className="text-lg font-bold text-red-600">
                        $ {discountedPrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        $ {product.price.toLocaleString()}
                      </span>
                      <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                        -{product.discount}%
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold">
                      $ {product.price.toLocaleString()}
                    </span>
                  )}
                </div>

           
                {product.popular && (
                  <div className="mt-2 text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded inline-block">
                    ⭐ Produk Terlaris
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
      
      {/* Tombol 'More' */}
      {visibleProducts < sortedProducts.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleProducts(sortedProducts.length)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tampilkan Lebih Banyak
          </button>
        </div>
      )}
    </div>
  )
}

export default Products