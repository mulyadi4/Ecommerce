// Shop.jsx
import React, { useState } from 'react';
import Products from '../components/Products';
import data from '../assets/products.json';

const Shop = ({ selectedCategory }) => {
  const productList = data.products;
  const [searchQuery, setSearchQuery] = useState('');

  // Filter produk berdasarkan kategori dan pencarian
  const filteredProducts = productList.filter(product => {
    // Filter berdasarkan kategori jika ada kategori yang dipilih
    const categoryMatch = selectedCategory
      ? selectedCategory === 'OtherElectronics'
        ? !['Smartphone', 'Laptop', 'Camera', 'Console', 'Monitor'].includes(product.category)
        : product.category === selectedCategory
      : true;

    // Filter berdasarkan search query (case-insensitive)
    const searchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <section id='product' className="container mx-auto px-4 pt-20">
      <h2 className="text-2xl font-bold mb-4">
        Products {selectedCategory && `- ${selectedCategory}`}
      </h2>
      {/* Input Search */}
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className=" w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <Products items={filteredProducts} />
    </section>
  );
};

export default Shop;
