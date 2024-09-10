import React, { createContext, useContext, useState } from 'react';

const Babu = createContext();
export const useCartContext = () => useContext(Babu);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <Babu.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </Babu.Provider>
  );
};