import React from 'react';
import { CgSmartphone } from "react-icons/cg";
import { IoWatchOutline } from "react-icons/io5";
import { BsLaptop } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { GiConsoleController } from "react-icons/gi";
import { TiThSmall } from "react-icons/ti";
import { LuMonitor } from "react-icons/lu";

const Category = ({ onSelectCategory }) => {
  const categories = [
    { label: "All", name: '', img: <TiThSmall /> },
    { label: "Smartphone", name: 'Smartphone', img: <CgSmartphone /> },
    { label: "Laptop", name: 'Laptop', img: <BsLaptop /> },
    { label: "Camera", name: 'Camera', img: <CiCamera /> },
    { label: "Console", name: 'Console', img: <GiConsoleController /> },
    { label: "Monitor", name: 'Monitor', img: <LuMonitor /> },
    { label: "OtherElectronics", name: 'OtherElectronics', img: <IoWatchOutline /> },
  ];

  return (
    <section id='category' className="pt-20 px-4">
      <div className="container mx-auto">
        <h3 className="text-xl font-bold mb-4">Category</h3>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-6 px-5 lg:grid-cols-7 rounded-lg">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => onSelectCategory(cat.name)}
              className="bg-white p-4 rounded shadow text-center cursor-pointer flex flex-col items-center justify-center"
            >
              <div className="text-3xl">
                {cat.img}
              </div>
              <p className="mt-2 text-sm">{cat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
