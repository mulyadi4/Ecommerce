import { useState, useContext } from 'react';
import Navbar from './Navbar';
import { MdClose, MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import CartDropdown from './CartDropdown';
import { CartContext } from "../context/CartContext";

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
        <h4 className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-opacity hover:opacity-100">
          TechStore
        </h4>

        <div className="relative flex right-10 items-center gap-x-6 sm:gap-x-8 ">
        <div className="">
          <Navbar stylesNavbar="hidden md:flex gap-x-5 xl:gap-x-10 medium-15" />
        </div>

          <button
            aria-label="Toggle cart"
            className="  items-center justify-center focus:outline-none"
            onClick={() => setCartOpen(prev => !prev)}
          >
            <MdOutlineShoppingCart className="text-white text-[1.5rem]" />
            {itemQuantity > 0 && (
              <span className="absolute -top-2.5 -right-2.5 flex items-center justify-center w-5 h-5 rounded-full bg-gray-500 text-white text-sm shadow-md">
                {itemQuantity}
              </span>
            )}
          </button>
          
          <button
            aria-label="Toggle menu"
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl cursor-pointer hover:text-secondary"
          >
            {menuOpened ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>
            
      {/* Mobile Navbar */}
      <div
        className={`fixed top-16 left-0 right-0 h-screen bg-black/90 p-6 transform transition-transform duration-300 ease-in-out lg:hidden ${menuOpened ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Navbar stylesNavbar="flex flex-col gap-6" />
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
