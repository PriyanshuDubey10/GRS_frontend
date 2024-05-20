// Nav.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from '../useContext/useAuth';

const Nav = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    console.log(user);

    const handleLogout = async () => {
        try {
           const logout = await axios.get('https://grs-backend-1.onrender.com/api/users/logout');
           console.log(logout);
            setUser(null); // Clear the user state
            navigate('/'); // Redirect to the login page or any other page
            toast.success("Loginout successful!");
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div className="nav-bar">
            <div className="highlight">
                <div className="N">EMERGENCY CONTACT ON  <span><a className="number" href="tel:9118144449">+91-9118144449</a></span></div>
            </div>
            <div className="nav">
                <div className="logo"><img className="logo-img" src="logo.png" alt="logo" /></div>
                <div className="list">
                    <ul className="nav-list">
                        <li><div className="home"><Link to="/home" className="link">Home</Link></div></li>
                        <li><div className="complain"><Link to="/grievance" className="link">Grievance</Link></div></li>
                        <li><div className="enquiry"><Link to={`/enquiries/${user?._id}`} className="link">Enquiry</Link></div></li>
                        <li><div className="contact_us"><Link to="/contact_us" className="link">Contact Us</Link></div></li>
                    </ul>
                </div>
                <div className='btn'>
                    {user ? (
                        <div className="user-info">
                            <h4>Welcome, {user.name}</h4>
                            <div  onClick={handleLogout} className="link">Logout</div>
                        </div>
                    ) : (
                        <div className="last"><Link to="/" className="link">Login</Link></div>
                    )}
                </div>
            </div>
        </div>
    )
};
export default Nav;