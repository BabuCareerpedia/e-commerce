// Navbar.js
import React from "react";
import { useProductContext } from "../Context/Product";

const Navbar = () => {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery ,productData} = useProductContext();

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  console.log(productData)

  return (
    <nav>
        <h1>navbar section</h1>
      <div>
        <label htmlFor="category">Select Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          {productData.map((category) => (
            <option key={category.cat_name} value={category.cat_name}>
              {category.cat_name}
            </option>
          ))}
        </select>
  
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {/* Add other navbar items */}
    </nav>
  );
};

export default Navbar;
