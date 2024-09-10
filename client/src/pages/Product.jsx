import React from "react";
import { useProductContext } from "../Context/Product";
import { useCartContext } from "../Context/Babu";
import Navbar from "./Navbar";



const Product = () => {
  const { selectedCategory, searchQuery, productData, setSelectedCategory, setSearchQuery } = useProductContext();
  const { addToCart } = useCartContext();

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Navbar/>
      <h1>Product List section</h1>
      <ul>
        {productData.map(
          (category) =>
            (selectedCategory === "" ||
              selectedCategory === category.cat_name) &&
            category.items.map((item) => (
              <li key={item.cat_name}>
                <h2>{item.cat_name}</h2>
                <ul>
                  {item.products
                    .filter((product) =>
                      product.productName
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    )
                    .map((product) => (
                      <li key={product.id}>
                        <h3>{product.productName}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Brand: {product.brand}</p>
                        <button onClick={() => addToCart(product)}>
                          Add to Cart
                        </button>
                      </li>
                    ))}
                </ul>
              </li>
            ))
        )}
      </ul>
    </div>
  );
};

export default Product;
