import React, { useState } from 'react';
import Product from './Product';
import { useProductContext } from '../Context/Product';

const Payment = () => {
  const { productData } = useProductContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedProduct, setSearchedProduct] = useState(null);

  const handleSearch = () => {
    // Logic to search product data based on searchTerm
    const foundProduct = productData.find(
      (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedProduct(foundProduct);
  };

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search Products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
              />
              <button className="btn waves-effect waves-light" type="button" onClick={handleSearch}>
                Search
                <i className="material-icons right">search</i>
              </button>
            </div>
          </form>
        </div>
      </nav>

      <h1>Payment</h1>
      <p>Total amount</p>
      <p>Successfully placed your order</p>

      {searchedProduct ? (
        <Product products={[searchedProduct]} />
      ) : (
        <p>No product details found</p>
      )}
    </div>
  );
};

export default Payment;
