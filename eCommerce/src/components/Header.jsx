
import { useState ,useContext } from 'react';
import Navbar from './Navbar';
import { MdClose, MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import CartDropdown from './CartDropdown';
import { CartContext } from "../context/CartContext";
const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { itemQuantity } = useContext(CartContext);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header className="fixed left-0 right-0 max-padd-container flex items-center justify-between z-10 transition-all duration-300 top-0 w-full border-b bg-black backdrop-blur-lg px-6 py-4">
      <div>
        <h4 className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-opacity hover:opacity-100">
          TechStore
        </h4>
      </div>
    
    {/* Desktop */}
      <div className="flex items-center justify-between gap-x-20">
        {/* Komponen Navbar */}
        <div className="">
          <Navbar stylesNavbar="hidden md:flex gap-x-5 xl:gap-x-10 medium-15" />
        </div>
        {/* Navbar Mobile */}
        {/* <Navbar className=""
          containerStyle={`fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 ${
            menuOpened ? "right-8 flex" : "-right-full hidden"
          }`}
        /> */}

        
        <div className="flex items-center justify-between gap-x-10 sm:gap-x-8 relative">
        {!menuOpened ? (
            <MdMenu
              onClick={toggleMenu}
              className=" cursor-pointer text-white  hover:text-secondary text-2xl"
              aria-label="Open menu"
            />
          ) : (
            <MdClose
              onClick={toggleMenu}
              className=" cursor-pointer text-white  hover:text-secondary text-2xl"
              aria-label="Close menu"
            />
          )}



          <button
            aria-label="Toggle cart"
            className="flexCenter relative flex items-center justify-center focus:outline-none"
            onClick={() => setCartOpen(prev => !prev)}
          >
            <MdOutlineShoppingCart className="text-white text-[1.5rem]" />
     
            <span className="absolute -top-2.5 -right-2.5 flex items-center justify-center w-5 h-5 rounded-full bg-gray-500 text-white text-sm shadow-md">
             {itemQuantity}
              </span>

            
          </button>
      
          {cartOpen && <CartDropdown />}
         
        </div>
      </div>
    </header>
  );
};

export default Header;
