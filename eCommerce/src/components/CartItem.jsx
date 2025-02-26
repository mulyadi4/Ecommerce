import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { TbMinus, TbPlus } from "react-icons/tb";
import { Link } from 'react-router-dom';
const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  return (

    <div className="flex  items-center py-2 border-b  ">
      <img
        src={item.image}
        alt={item.title}
        className="w-12 h-12 object-contain mr-2"
      />
      <div className="flex-1">
      <Link to={`/product/${item.id}`} >
        <h4 className="text-sm font-semibold">{item.title}</h4>
      </Link>
        
        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
        <div className="flex items-center gap-2 mt-1">
          <button onClick={() => decreaseQuantity(item.id)} className="text-gray-500">
            <TbMinus />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)} className="text-gray-500">
            <TbPlus />
          </button>
        </div>
      </div>
      <span className="text-sm font-bold">
        Rp. {(item.price * item.quantity).toLocaleString()}
      </span>
      <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-500 text-sm">
        X
      </button>
    </div>
  );
};

export default CartItem;
