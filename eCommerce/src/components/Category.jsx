import React from 'react'

const Category = () => {
  return (
    <section className="container mx-auto py-8">
    <h3 className="text-xl font-bold mb-4">Kategori Pilihan</h3>
    <div className="grid grid-cols-4 gap-4">
      {/* Kategori 1 */}
      <div className="bg-white p-4 rounded shadow text-center">
        <img
          src="https://via.placeholder.com/100"
          alt=""
          className="mx-auto"
        />
        <p className="mt-2"></p>
      </div>

    </div>
  </section>
  )
}

export default Category