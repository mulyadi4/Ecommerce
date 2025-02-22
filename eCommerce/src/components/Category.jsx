import React from 'react'

const Category = () => {
  // Data kategori (silakan ubah sesuai kebutuhan)
  const categories = [
    { name: 'iPhone', img: 'https://via.placeholder.com/100' },
    { name: 'iPad', img: 'https://via.placeholder.com/100' },
    { name: 'Mac',     img: 'https://via.placeholder.com/100' },
    { name: 'Watch', img: 'https://via.placeholder.com/100' },
    { name: 'AirPods', img: 'https://via.placeholder.com/100' },
    { name: 'TV', img: 'https://via.placeholder.com/100' },
  ]

  return (
    <section className="py-20 px-5 ">
      <div className='container mx-auto  items-center'>

      <h3 className="text-xl font-bold mb-4">Kategori Pilihan</h3>
      
      {/* Grid untuk menampilkan kategori */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4  rounded-lg">
        {categories.map((cat, index) => (
          <div 
          key={index}
          className="bg-white p-4 rounded shadow text-center"
          >
         
            <p className="text-gray-700 font-semibold">{cat.name}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Category
