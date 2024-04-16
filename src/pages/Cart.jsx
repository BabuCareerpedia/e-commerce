import React from 'react'
import {useProductContext} from '../Context/Product'
import {useCartContext} from '../Context/Babu'

const Cart = () => {
    const { cartItems, removeFromCart } = useCartContext();

  return (
    <div>
      <h2>Shopping Cart</h2>
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
  )
}

export default Cart
