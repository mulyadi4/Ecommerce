import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  
  return (
    <header className='fixed left-0 right-0  max-padd-container flex items-center justify-between z-10 transition-all duration-300 top-0  w-full border-b bg-black backdrop-blur-lg px-6 py-4'>
        {/* Logo TechStore dengan Link ke beranda */}
       <div>

        
            <h4 className='bg-gradient-to-r from-gray-400 to-white bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-opacity hover:opacity-100'>
              TechStore
            </h4>
          
       </div>
    
      <div className='flex items-center justify-between gap-x-20'>
        

        {/* Komponen Navbar */}
        <div className= ' text-white'>
          <Navbar stylesNavbar='hidden md:flex gap-x-5 xl:gap-x-10 medium-15 ' />
        </div>
        <div className='flex items-center justify-between gap-x-10 sm:gap-x-8 relative'>
        <button aria-label="Open cart" className="relative flex items-center justify-center focus:outline-none">
          <MdOutlineShoppingCart className="text-white text-[1.5rem]" />
          <span className="absolute -top-2.5 -right-2.5 flex items-center justify-center w-5 h-5 rounded-full bg-gray-500 text-white text-sm shadow-md">
            5
          </span>
        </button>
   
    <MdMenu className='text-white text-2xl ' />

        {/* Ikon Keranjang dalam elemen button untuk aksesibilitas */}

        </div>
      </div>
    </header>
  );
};

export default Header;
