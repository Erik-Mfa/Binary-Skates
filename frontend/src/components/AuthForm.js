import React, { useState } from 'react';
import { login } from '../services/auth';

const AuthForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      const token = await login(credentials);
      // Save the token in local storage or a secure cookie
      console.log('Token:', token);
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AuthForm;
