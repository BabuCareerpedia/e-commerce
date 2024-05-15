import React from 'react';
import { useCartContext } from '../Context/Babu'; // Corrected import
import { useProductContext } from '../Context/Product';
import Product from './Product';


const Cart = () => {
    const { cartItems, removeFromCart } = useCartContext();
    console.log(cartItems)
    const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery ,productData} = useProductContext();

    return (
        <div>
          <Product/>
          <h1>ksnzl</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <h3>{item.productName}</h3>
                        <p>Price: ${item.price}</p>
                        <p>Brand: {item.brand}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
