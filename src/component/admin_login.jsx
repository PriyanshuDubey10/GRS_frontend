import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../useContext/useAuth';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [department, setDepartment] = useState(''); // No default department value initially
    const [error, setError] = useState('');
    const { setUser } = useAuth();
    const navigate = useNavigate();

    const BASE_URL = "https://gr-backend-zniz.onrender.com";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(`${BASE_URL}/api/admins/adminl`, {
                email,
                password,
                department, // Include department in the request
            });
            console.log(response);
            toast.success("Admin Login successful!");
            setUser(response.data.admin);
            navigate(`/dashboard/${department}`); // Navigate to dashboard with the selected department
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred during login');
        }
    };

    return (
        <div className="form">
            <div className="login_div">
                <h1 className="heading1">Login as Admin</h1>
                <form onSubmit={handleSubmit}>
                    <input className="text" type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="text" type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    {/* Department selection */}
                    <select className="dept" value={department} onChange={(e) => setDepartment(e.target.value)}>
                        <option value="">Select Department</option>
                        <option value="Education">Education</option>
                        <option value="Mess">Mess/Canteen</option>
                        <option value="Other">Other</option>
                    </select>

                    <button type="submit">Login</button>
                </form>
                <div className='Switch-btn'>
                    <button><Link to="/ad_register" className='link'>Signup</Link></button>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
