import React, { useState, useEffect } from 'react';
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
    <div>
    <h2>Order List</h2>
    <ul>
      {orders.map((order) => (
        <li key={order._id}>
          <Link to={`/order/${order.id}`}>
            Id: {order.id}
          </Link>
          <p>User: {order.user.name}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default OrderList;