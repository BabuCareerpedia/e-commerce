// CartListPage.js
import React from 'react';
import { useCartContext } from '../Context/Babu';

const CartListPage = () => {
  const { cartItems, removeFromCart } = useCartContext();
  console.log(cartItems)

  return (
    <div>
      <h2>Cart List Page</h2>
      {/* <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <div>{item.productName}</div>
            <div>{item.price}</div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default CartListPage;
