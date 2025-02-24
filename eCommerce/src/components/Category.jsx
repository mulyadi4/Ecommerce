import React from 'react'
import { CgSmartphone } from "react-icons/cg";
import { IoWatchOutline } from "react-icons/io5";
import { BsLaptop } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { GiConsoleController } from "react-icons/gi";
const Category = () => {
  // Data kategori (silakan ubah sesuai kebutuhan)
  const categories = [
    { name: 'Smart Phone', img: <CgSmartphone /> },
    { name: 'Laptop', img: <BsLaptop /> },
    { name: 'Camera', img: <CiCamera />},
    { name: 'Console', img: <GiConsoleController /> },
    { name: 'Other electronics', img: <IoWatchOutline />},
 
  ]

  return (
    <section className="py-20 px-4 ">
      <div className='container mx-auto  items-center'>

      <h3 className="text-xl font-bold mb-4">Kategori Pilihan</h3>
      
      {/* Grid untuk menampilkan kategori */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 px-4  rounded-lg">
        {categories.map((cat, index) => (
          <div 
          key={index}
          className="bg-white p-4 rounded shadow text-center"
          >
         
            <p className="">{cat.img}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Category
