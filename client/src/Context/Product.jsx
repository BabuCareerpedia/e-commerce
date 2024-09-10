import React, { useState, useEffect, createContext, useContext } from 'react';

// Product Context
const Product = createContext();
export const useProductContext = () => useContext(Product);

export const ProductProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('/product.json');
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProductData(data.productData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Product.Provider value={{ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery, productData }}>
      {children}
    </Product.Provider>
  );
};