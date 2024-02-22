import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-xs mx-auto p-4 border border-gray-300 rounded shadow-md">
      <ul>
        <h1>Products</h1>
        {products.map((product) => (
          <li key={product._id} className="mb-2">
            <Link to={`/product/${product.id}`} className="text-indigo-600 hover:text-indigo-900">
              <p className="font-semibold">Id: {product.id}</p>
              <p>Name: {product.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
