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
    <div>
    <h2>Product List</h2>
    <ul>
      {products.map((product) => (
        <li key={product._id}>
          <Link to={`/product/${product.id}`}>
            Id: {product.id}
          </Link>
         
        </li>
      ))}
    </ul>
  </div>
  );
};


export default ProductList;