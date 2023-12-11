// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import OrderDetail from './components/OrderDetail';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order/:id" element={<OrderDetail />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;