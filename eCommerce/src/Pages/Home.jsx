
import React, { useState } from 'react';
import Category from "../components/Category";
import Hero from "../components/Hero";
import Shop from "../components/Shop";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      <Hero />
      <Category onSelectCategory={handleSelectCategory} />
      <Shop selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
