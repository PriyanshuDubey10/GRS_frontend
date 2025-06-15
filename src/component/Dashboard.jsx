import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [dataArray, setDataArray] = useState([]);
    const [selectedGrievanceId, setSelectedGrievanceId] = useState(null);
    const history = useNavigate();

    const { department } = useParams();
    console.log("department", department);
    const BASE_URL = 'https://gr-backend-zniz.onrender.com';

    useEffect(() => {
        axios.get(`${BASE_URL}/api/users/grievances/${department}`)
            .then(response => setDataArray(response.data))
            .catch(err => console.log(err));
    }, [department]);

    const handleEditGrievance = (_id) => {
        setSelectedGrievanceId(_id);
        history(`/updateDocs/${_id}`);
    };
    
    return (
        <div className="enq">
            <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Subject</th>
                        <th>Grievance</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>feedback</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataArray.map(item => (
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
                            <td><button onClick={() => handleEditGrievance(item._id)}>Update</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
    );
};

export default Dashboard;
