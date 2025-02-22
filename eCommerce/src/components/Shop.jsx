
import Products from './Products'
import data from './data.json' // Mengimpor data dari file JSON

const Shop = () => {
  // Mengambil daftar produk dari data.json
  const productList = data.products

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <Products items={productList} />
    </div>
  )
}

export default Shop
