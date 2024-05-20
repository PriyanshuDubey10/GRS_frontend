import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './component/login';
import Register from './component/register';
import AdminLogin from './component/admin_login';
import Nav from './component/nav';
import Home from './component/Home';
import Grievance from './component/Grievance'
import Enquiry from './component/Enqiury';
import Adminregister from './component/ad_register';
import Choice from './component/choice';
import Contact_Us from './component/Contact_Us';
import Footer from './component/footer';
import { UserProvider } from './useContext/useAuth';
import Dashboard from './component/Dashboard';
import UpdateDocs from './component/updateDocs';
import ProtectedRoute from './ProtectedRoute';
import { Toaster } from 'react-hot-toast';

const App = () => {


  return (
    <UserProvider>
    <Router>
    <Toaster position="top-center" reverseOrder={false} />
      <Nav />
      <Routes>
      <Route path="/" element={<Choice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/ad_register" element={<Adminregister />} />
        <Route path="/dashboard/:department" element={<Dashboard />} />
        <Route path="/updateDocs/:id" element={<UpdateDocs  />} />
        <Route path="/home" element={<Home />} />
        <Route path="/enquiries/:userId" element={<ProtectedRoute><Enquiry /></ProtectedRoute>} />
        <Route path="/grievance" element={<ProtectedRoute><Grievance /></ProtectedRoute>} />
        <Route path="/contact_us" element={<Contact_Us />} />
      </Routes>
      <Footer />
    </Router>
    </UserProvider>
  );
};

export default App;
