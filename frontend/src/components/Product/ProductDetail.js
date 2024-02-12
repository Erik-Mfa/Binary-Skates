import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/product/${id}`); 
        setProduct(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching product detail:', error.message);
      }
    };

    fetchProductDetail();
  }, [id]);

  return (
    <div>
      <h2>Product Detail</h2>
      {product ? (
        <div>
          <h3>Item name: {product.name}</h3>
          <p>Item price: {product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

};

export default ProductDetail;