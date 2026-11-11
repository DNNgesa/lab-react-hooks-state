import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const [cartItems, setCartItems] = useState([])

  const [category, setCategory] = useState('All')

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#222222' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#000000',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'sans-serif',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      <h1>Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle 
        isDarkMode={isDarkMode} 
        onToggle={() => setIsDarkMode(!isDarkMode)} 
      />

      <label htmlFor="category-select">Filter by Category: </label>
      <select 
        id="category-select"
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: '6px', borderRadius: '4px', cursor: 'pointer' }}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent" hidden>NonExistent</option>
      </select>

      <ProductList 
        selectedCategory={category} 
        onAddToCart={handleAddToCart} 
      />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
