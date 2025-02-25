// Shop.jsx
import Products from '../components/Products';
import data from '../assets/products.json';

const Shop = ({ selectedCategory }) => {
  const productList = data.products;

  // Filter produk berdasarkan kategori yang dipilih
  const filteredProducts = selectedCategory
    ? selectedCategory === 'OtherElectronics'
      ? productList.filter(
          product =>
            !['Smartphone', 'Laptop', 'Camera', 'Console'].includes(product.category)
        )
      : productList.filter(product => product.category === selectedCategory)
    : productList;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">
        Products {selectedCategory && `- ${selectedCategory}`}
      </h2>
      <Products items={filteredProducts} />
    </div>
  );
};

export default Shop;
