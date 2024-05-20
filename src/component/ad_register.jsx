import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../useContext/useAuth';

const Adminregister = () => {
    const [name, setName] = useState('');
    const [department, setdepartment] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useAuth();

    const BASE_URL = 'https://grs-backend-1.onrender.com';
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(`${BASE_URL}/api/admins/adminr`, {
                name,
                department,
                email,
                password,
            });
            toast.success("User Registration successful!");
            
            setUser(response.data.user);
            alert('Account Created Successful');
            navigate('/');
        } catch (error) {
            console.error('Registration error:', error);
            if (error.response && error.response.status === 400) {
                const validationErrors = error.response.data.errors;
                if (validationErrors) {
                    Object.values(validationErrors).forEach((error) => {
                        alert(error);
                    });
                } else {
                    toast.error("An error occurred during registration");
                }
            } else {
                toast.error("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div className="form">
            <div className='register_div'>
                <h1 className="heading1">Create An Admin Account</h1>
                <form onSubmit={handleSubmit}>
                    <input className="text" type="text" placeholder="Your Name Here" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
          <p1>Department:</p1>
          <select class="dept" name="department" value={department} onChange={(e) => { setdepartment(e.target.value) }}>
                            <option value="select">Select</option>
                            <option value="Education">Education</option>
                            <option value="Mess">Mess/Canteen</option>
                            <option value="Other">Other</option>
                        </select>
                    <input className="text" type="email" placeholder="Your Email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input className="text" type="password" placeholder="Enter Your Password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    <button type="submit">Register</button>
                </form>
                <div className='Switch-btn'>
                    <button><Link to="/admin_login" className='link'>Login</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Adminregister;
