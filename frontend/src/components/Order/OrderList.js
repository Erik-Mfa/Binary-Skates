import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3001/order');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-xs mx-auto p-4 border border-gray-300 rounded shadow-md">
    <ListGroup>
      {orders.map((order) => (
        <ListGroup.Item
        key={order._id}>
          Id: {order.id}
          <Link to={`/order/${order.id}`}>
            Name {order.name}
          </Link>
        </ListGroup.Item>
      ))}

    </ListGroup>
    </div>
  );
};

export default OrderList;