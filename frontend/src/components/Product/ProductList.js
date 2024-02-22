import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
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
    <ListGroup>
      {products.map((product) => (
        <ListGroup.Item
        key={product._id}>
          <Link to={`/product/${product.id}`}>
            Id: {product.id}
            Name: {product.name}
          </Link>
        </ListGroup.Item>
      ))}

    </ListGroup>
  );
};


export default ProductList;