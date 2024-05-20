import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from '../useContext/useAuth';

const Grievance = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    department: '',
    subject: '',
    body: '',
    // attachment: null,
    date: '',
    status:'',
    feedback:''
  });
  const BASE_URL = 'https://grs-backend-1.onrender.com';

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const fileGrievance = async (event) => {
    event.preventDefault();

    const data = {
      name: userData.name,
      email: user.email,
      department: userData.department,
      subject: userData.subject,
      body: userData.body,
      // attachment: userData.attachment,
      userId: user._id,
      date: user.date,
      status: userData.status,
      feedback: userData.feedback
    };

    try {
      const res = await axios.post(`${BASE_URL}/api/users/grievance`, data);
      if (res.status === 201) {
        toast.success("Grievance Filed Successfully!! We'll inform you when there will be a response");
        setUserData({ name: '', department: '', subject: '', body: '', attachment: null });
      } else {
        console.log('Grievance Not Filed');
        window.alert('Try to relogin. Your grievance was not filed!');
      }
    } catch (err) {
      console.error('Error filing grievance:', err);
    }
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setUserData({ ...userData, attachment: file });
  // };

  return (
    <div className="form">
      <div className="register_div">
        <h2>Grievance</h2>
        <form className="complain_form">
          <input className='text' type="text" placeholder="Name" name="name" value={userData.name} onChange={handleInputs} required />
          <p1>Department:</p1>
          <select class="dept" name="department" value={userData.department} onChange={handleInputs}>
                            <option value="Select">--Select Department--</option>
                            <option value="Education">Education</option>
                            <option value="Mess">Mess/Canteen</option>
                            <option value="Other">Other</option>
                        </select>
          <input className='text' type="text" placeholder="Subject" name="subject" value={userData.subject} onChange={handleInputs} required />
          <textarea placeholder="Explain your Grievance" name="body" value={userData.body} onChange={handleInputs} required />
          {/* <input type="file" name="attachment" onChange={handleFileChange}/> */}
          <button type="submit" onClick={fileGrievance}>File Grievance</button>
        </form>
      </div>
    </div>
  );
};

export default Grievance;