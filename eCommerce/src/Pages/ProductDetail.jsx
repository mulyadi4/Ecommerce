import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import data from '../assets/products.json';
import Products from '../components/Products';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  
  // Cari produk berdasarkan id dari URL
  const items = data.products.find(p => p.id === parseInt(id));

  if (!items) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/" className="text-gray-600 hover:text-gray-800 underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  // Lakukan destructuring setelah 'items' sudah ada
  const { image, category, title, description, brand, price, rating, discount } = items;

  const discountedPrice = discount
    ? price * (1 - discount / 100)
    : price;

  // Filter produk dengan kategori yang sama, kecuali produk yang sedang dilihat
  const relatedProducts = data.products.filter(
    product => product.category === category && product.id !== items.id
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-800 w-fit"
      >
        <FaArrowLeft className="inline-block" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white p-4 ">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-96 object-contain p-4" 
          />
        </div>

        {/* Product Details */}
        <div className="bg-white p-6  ">
         
          
      
            <span className="text-sm text-gray-500 block">{brand}</span>
        
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <span className="text-gray-600 text-sm">{category}</span>
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <span key={index}>
                  {rating.rate >= index + 1 ? '★' : '☆'}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({rating.rate.toFixed(1)}) • {rating.count} reviews
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            {discount ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-red-600">
                  Rp. {discountedPrice.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  Rp. {price.toLocaleString()}
                </span>
                <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                  -{discount}%
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold">
                Rp. {price.toLocaleString()}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-8">{description}</p>

       
          <button
            onClick={() => addToCart(items)}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition-colors flex items-center gap-2 w-full justify-center"
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
      
 
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">
        Related Products
        </h2>
        <Products items={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductDetail;
