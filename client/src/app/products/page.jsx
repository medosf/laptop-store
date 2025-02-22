'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make sure the NestJS backend is running (e.g., on port 3001)
    axios.get('http://localhost:3001/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Available Laptops</h1>
      <ul>
        {!!products ? products?.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.imageUrl} alt={product.name} width="200" />
          </li>
        )) : N/A}
      </ul>
    </div>
  );
}
