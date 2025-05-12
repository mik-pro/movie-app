import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  let {setIsAuthenticated}=useContext(AuthContext)
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = { login, password };

    
    if (user) {
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Login:</label>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setLogin(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
