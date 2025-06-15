import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../useContext/useAuth';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useAuth();

    const BASE_URL = 'https://gr-backend-zniz.onrender.com';
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(`${BASE_URL}/api/users/register`, {
                name,
                email,
                password,
            });
            toast.success("User Registration successful!");
            setUser(response.data.user);
            navigate('/home')     
        } catch (error) {
            console.error('Registration error:', error);
            toast.error("An error occurred during registration");
        }
    }
    return (
        <div className="form">
            <div className='register_div'>
            <h1 className="heading1">Create An Account</h1>
            <form onSubmit={handleSubmit}>
                <input className="text" type="text" placeholder="Your Name Here" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input className="text" type="email" placeholder="Your Email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input className="text" type="password" placeholder="Enter Your Password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type="submit">Register</button>
            </form>
            <div className='Switch-btn'>
                   <button><Link to="/" className='link'>Login</Link></button>
                </div>
                </div>
        </div>
    )
}
export default Register;
