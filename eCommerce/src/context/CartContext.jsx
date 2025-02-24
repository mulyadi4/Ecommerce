import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);

  // Hitung total harga setiap kali cart berubah
  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  // Hitung total jumlah item di cart
  useEffect(() => {
    const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    setItemQuantity(quantity);
  }, [cart]);

  // Fungsi untuk menambahkan item ke cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Fungsi untuk menghapus item dari cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Fungsi untuk menghapus seluruh item di cart
  const clearCart = () => {
    setCart([]);
  };

  // Fungsi untuk meningkatkan jumlah item di cart
  const increaseQuantity = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Fungsi untuk mengurangi jumlah item di cart; jika jumlah mencapai 1, maka hapus item tersebut
  const decreaseQuantity = (id) => {
    const currentItem = cart.find((item) => item.id === id);
    if (!currentItem) return;
    if (currentItem.quantity > 1) {
      setCart(cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, total, itemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
