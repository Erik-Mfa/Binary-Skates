import React, { useState } from 'react';
import { login } from '../../services/auth';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const token = await login(credentials);
      // Save the token in local storage or a secure cookie
      console.log('Token:', token);
      navigate("/home");
    } catch (error) {
    }
  };

  return (
    <div className="max-w-xs mx-auto p-4 border border-gray-300 rounded shadow-md">
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            className="block w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="block w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin} className="block w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
