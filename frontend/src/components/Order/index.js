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
    <div className="max-w-xs mx-auto p-4 border border-gray-300 rounded shadow-md">
      <ul className="divide-y divide-gray-200">
        <h1>Orders:</h1>
        {orders.map((order) => (
          <li key={order._id} className="py-4">
            <Link to={`/order/${order.id}`} className="text-indigo-600 hover:text-indigo-900">
              <p className="font-semibold">Id: {order.id}</p>
              <p>Name: {order.user.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
