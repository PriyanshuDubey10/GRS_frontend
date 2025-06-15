import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateDocs = () => {
    const [grievance, setGrievance] = useState(null);
    const [status, setStatus] = useState('');
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();
    const BASE_URL = 'https://gr-backend-zniz.onrender.com';

    const handleFetchGrievance = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/users/grievance/${id}`);
            setGrievance(response.data);
            setStatus(response.data.status);
            setFeedback(response.data.feedback || '');
        } catch (error){
            console.error('Error fetching grievance:', error);
            setGrievance(null);
            setError('Failed to fetch grievance');
        }
    };

    useEffect(() => {
        handleFetchGrievance();
    }, []);

    const updateData = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.patch(`${BASE_URL}/api/users/grievance/${id}`, {
                status,
                feedback
            });
            console.log('Request config:', res.config);

            if (res.status === 200) {
                toast.success('Grievance Updated Successfully');
                handleFetchGrievance();
                navigate(`/dashboard/${grievance.department}`)
            } else {
                window.alert('Failed to update grievance');
            }
        } catch (err) {
            console.error('Error updating grievance:', err);
            window.alert('Failed to update grievance');
        }
    };
        return (
            <div className='edit'>
                <h1>Update Grievance</h1>
                {error && <p>{error}</p>}
                {grievance && (
                    <form onSubmit={updateData}>
                        <div className="grievance-details">
                            <label>ID:</label>
                            <input type="text" className="text" value={grievance._id} readOnly />
                            <br/>
                            <label>Name:</label>
                            <input type="text" className="text" value={grievance.name} readOnly />
                            <br/>
                            <label>Email:</label>
                            <input type="text" className="text" value={grievance.email} readOnly />
                            <br/>
                            <label>Department:</label>
                            <input type="text" className="text" value={grievance.department} readOnly />
                            <br/>
                            <label>Subject:</label>
                            <input type="text" className="text" value={grievance.subject} readOnly />
                            <br/>
                            <label>Body:</label>
                            <textarea className="text" value={grievance.body} readOnly />
                            <br/>
                            <label>Status:</label>
                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Resolved">Resolved</option>
                                <option value="Closed">Closed</option>
                            </select>
                            <br/>
                            <label>Feedback:</label>
                            <textarea className="text" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                            <br/>
                        </div>
                        <button type="submit">Update</button>
                    </form>
                )}
            </div>
        );
    };
    
    export default UpdateDocs;
    
