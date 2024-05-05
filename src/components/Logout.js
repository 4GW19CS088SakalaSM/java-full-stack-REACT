// Logout.js
import React from 'react';
import {  useNavigate } from 'react-router-dom';


const Logout = ({ setLoginStatus }) => { // Modified prop name to match
    const navigate = useNavigate();

    const handleLogout =() => {
       
        setLoginStatus(false); // Set login status to false
        alert('are you sure');
        navigate('/login');
        };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
