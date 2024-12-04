import React, { useState } from 'react'
import "./Home.css"
import data from '../assets/Products.json'
import NewProduct from './NewProduct';

const Home = () => {
    const [Products]= useState(data)
    
  return (
    <div className="product-container">
      {Products.map((Product) => (
        <NewProduct key={Product.id} Product={Product}  />
      ))}
    </div>
  );
}

export default Home
