import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from '../useContext/useAuth';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useAuth();

    const BASE_URL = "https://grs-backend-1.onrender.com";
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          axios.defaults.withCredentials = true;
            const response = await axios.post(`${BASE_URL}/api/users/login`, {
                email,
                password,
            });
            toast.success("User Login successful!");
            setUser(response.data.user);
            console.log("this is user",response.data.user ); 
            navigate('/home') 
        } catch (error) {
            console.error('Login error:', error);
            toast.error("User Login Failed!");
            setError('An error occurred during login');
        }
    };

    return (
        <div className="form">
            <div className="login_div ">
                <h1 className="heading1">Login</h1>
                <form onSubmit={handleSubmit}>
                    <input className="text" type="email" placeholder="Enter Your Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input className="text" type="password" placeholder="Enter Your Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className='Switch-btn'>
                <button><Link to="/register" className='link'>Signup</Link></button>
            </div>
        </div>
    )
};

export default Login;