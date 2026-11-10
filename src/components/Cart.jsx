import React from 'react'

// 🛒 Added cartItems parameter to map the global collection array cleanly
const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems && cartItems.map((item, index) => (
          <li key={index}>
            {item.name} is in your cart.
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
