import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

export default function LoginJSX() {
    const [adam, setAdam] = useState('');
    let {isAuthenticated,setIsAuthenticated}=useContext(AuthContext)
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const logout =()=>{
        localStorage.removeItem('user');

    setIsAuthenticated(false);

    navigate('/');
    } 

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        setAdam(user);
    }, []);

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h1>You are logged in!</h1>
                    <p>adam_login</p>
                    <button onClick={logout}>logout</button>
                </div>
            ) : (
                <div>
                    <p style={{ color: 'red' }}>Вы вошли в систему </p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="adam">Adam:</label>
                        <input
                            type="text"
                            placeholder="adam"
                            value={adam}
                            onChange={(e) => setAdam(e.target.value)}
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            )}
        </div>
    );
}
