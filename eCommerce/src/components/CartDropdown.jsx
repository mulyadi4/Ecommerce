import { useContext } from 'react';
import { TbTrash } from "react-icons/tb";
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

const CartDropdown = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  return (
    <div className="absolute top-12 right-0 w-72 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 z-50">
      {/* Daftar Item Keranjang */}
      <div className="max-h-60 overflow-y-auto">
        {cart.length > 0 ? (
          cart.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="text-center text-gray-500">Keranjang kosong</p>
        )}
      </div>

      {/* Total Harga */}
      <div className="flex justify-between border-t pt-2 mt-2">
        <span className="uppercase font-semibold">Total:</span>
        <span className="font-bold">Rp {total.toLocaleString()}</span>
      </div>

      {/* Tombol Checkout dan Hapus Semua */}
      <div className="mt-3 flex flex-col gap-2">
        <button className="btn-dark w-full">Checkout</button>
        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="flex items-center justify-center gap-2 text-red-500 mt-2 text-sm"
          >
            <TbTrash />
            Hapus Semua
          </button>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
