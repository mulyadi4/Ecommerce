import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaInfo, FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Products = ({ items }) => {
  
  const [visibleProducts, setVisibleProducts] = useState(8)
  const { addToCart } = useContext(CartContext);
  const sortedProducts = [...items].sort((a, b) => {
    if (a.popular !== b.popular) return b.popular - a.popular
    return b.rating.rate - a.rating.rate
  })
  
  return (
    <div  className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.slice(0, visibleProducts).map((items) => {
      const { id,image, category, title, brand, price, rating, discount } = items;
          const discountedPrice = discount 
            ? price * (1 - discount/100)
            : price

          return (
            
            <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-lg transition-shadow">
         
              
              <img 
                src={image} 
                alt={title} 
                className="w-full h-48 object-contain p-4"
                
                />
        <div className="group flex flex-row gap-2 text-white p-1 rounded-full ring-1 ring-white cursor-pointer">
  <FaPlus onClick={() => addToCart(items)} className="bg-gray-600 text-white h-7 w-7 p-1.5 rounded-full cursor-pointer hover:bg-gray-500 transition-colors" />
            <Link to={`/product/${id}`} >
  <FaInfo className="hidden group-hover:flex duration-300 bg-gray-600 text-white h-7 w-7 p-1.5 rounded-full cursor-pointer hover:bg-gray-500 transition-colors" />
            </Link>

</div>

              <div className="p-4">
                <div className="mb-2">
                  <span className="text-sm text-gray-500">{brand}</span>
                  <h3 className="font-bold text-lg">{title}</h3>
                
                  <p className="text-sm text-gray-500 mt-1">
                     {category}
                  </p>
                  
                  {/* Tampilan rating */}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>
                          {rating.rate >= index + 1 ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({rating.rate.toFixed(1)}) • {rating.count} ulasan
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  {discount ? (
                    <>
                      <span className="text-lg font-bold text-red-600">
                        Rp. {discountedPrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        RP. {price.toLocaleString()}
                      </span>
                      <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                        -{discount}%
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold">
                     Rp. {price.toLocaleString()}
                    </span>
                  )}
                </div>

           
               
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
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors"
          >
            More
          </button>
        </div>
      )}
    </div>
  )
}

export default Products