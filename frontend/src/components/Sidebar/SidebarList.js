import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SidebarList = () => {
  const [categorys, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/category');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching categorys:', error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ListGroup>
      {categorys.map((category) => (
        <ListGroup.Item
        key={category._id}>
          <Link to={`/category/${category.id}`}>
            Id: {category.id}
            Name: {category.name}
          </Link>
        </ListGroup.Item>
      ))}

    </ListGroup>
  );
};


export default SidebarList;