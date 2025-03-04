import { useState, useContext } from 'react';
import Navbar from './Navbar';
import { MdClose, MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import CartDropdown from './CartDropdown';
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { itemQuantity } = useContext(CartContext);
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(prev => !prev);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-10 w-full border-b bg-black backdrop-blur-lg px-6 py-4">
      <div className="max-padd-container flex items-center justify-between">
      <Link to="/" className="bold-24">
        <h4 className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-opacity hover:opacity-100">
          TechStore
        </h4>
      </Link>
       

        <div className="flex items-center gap-x-6 sm:gap-x-8">
          <Navbar styleNavbar="hidden md:flex gap-x-5 xl:gap-x-10 medium-15" />
          <div className="flex items-center gap-x-4">
          <button
              aria-label="Toggle cart"
              onClick={() => setCartOpen(prev => !prev)}
              className="relative flex items-center justify-center focus:outline-none"
            >
              <MdOutlineShoppingCart className="text-white text-[1.5rem]" />
              {itemQuantity > 0 && (
                <span className="absolute -top-2.5 -right-2.5 flex items-center justify-center w-5 h-5 rounded-full bg-gray-500 text-white text-sm shadow-md">
                  {itemQuantity}
                </span>
              )}
            </button> 
            <Link to="/login" className="text-white text-xl cursor-pointer hover:text-secondary">
            <FaUser className='text-white'/>
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className="md:hidden text-white text-2xl cursor-pointer hover:text-secondary"
            >
              {menuOpened ? <MdClose /> : <MdMenu />}
            </button>
         
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-16 left-0 right-0 h-screen bg-black/90 p-6 transform transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpened ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Navbar styleNavbar="flex flex-col gap-6" />
      </div>

      {/* Cart Dropdown */}
      {cartOpen && (
        <div className="absolute right-1 top-5 z-20">
          <CartDropdown />
        </div>
      )}
  
    </header>
  );
};

export default Header;
