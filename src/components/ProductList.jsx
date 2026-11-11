import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ selectedCategory, onAddToCart }) => {
  
  const filteredProducts = sampleProducts.filter((product) => {
    if (!selectedCategory || selectedCategory.toLowerCase() === 'all') return true;
    return product.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  if (filteredProducts.length === 0) {
    return <div style={{ padding: '20px 0', color: '#777' }}>No products available matching your criteria.</div>;
  }

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
        />
      ))}
    </div>
  )
}

export default ProductList
