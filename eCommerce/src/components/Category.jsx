
import React from 'react';
import { CgSmartphone } from "react-icons/cg";
import { IoWatchOutline } from "react-icons/io5";
import { BsLaptop } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { GiConsoleController } from "react-icons/gi";

const Category = ({ onSelectCategory }) => {
  const categories = [
    { name: '', img: "" },
    { name: 'Smartphone', img: <CgSmartphone /> },
    { name: 'Laptop', img: <BsLaptop /> },
    { name: 'Camera', img: <CiCamera /> },
    { name: 'Console', img: <GiConsoleController /> },
    { name: 'OtherElectronics', img: <IoWatchOutline /> },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto items-center">
        <h3 className="text-xl font-bold mb-4">Kategori Pilihan</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 px-4 rounded-lg">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded shadow text-center cursor-pointer"
              onClick={() => onSelectCategory(cat.name)}
            >
              <p className="text-3xl">{cat.img}</p>
              <p className="mt-2 text-sm">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
