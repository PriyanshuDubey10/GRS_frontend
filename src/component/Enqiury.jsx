import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Enquiry = () => {
    const [dataArray, setDataArray] = useState([]);
    const [loading, setLoading] = useState(true);

    const { userId } = useParams();
    const BASE_URL = 'https://grs-backend-2.onrender.com';

console.log(userId);
    useEffect(() => {
        if (userId) {
            axios.get(`${BASE_URL}/api/users/grievance/user/${userId}`)  
                .then(response => {
                    setDataArray(response.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching data:', err);
                    setLoading(false);
                });
        }
    }, [userId]);

    
    

    return (
        <div className="enq">
            {loading ? (
                <p>Loading...</p>
            ) : (
            <div className="table-container">
                <table className="E_page">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Subject</th>
                            <th>Body</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataArray.length > 0 ? (
                            dataArray.map(item => (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.department}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.body}</td>
                                    <td>{item.date}</td>
                                    <td>{item.status}</td>
                                    <td>{item.feedback}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9">No grievances found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                </div>
            )}
        </div>
    );
}
export default Enquiry;
