import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/order/${id}`); 
        setOrder(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching order detail:', error.message);
      }
    };

    fetchOrderDetail();
  }, [id]);

  return (
    <div>
      <h2>Order Detail</h2>
      {order ? (
        <div>
          <h3>{order.name}</h3>
          <p>Status: {order.status}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderDetail;