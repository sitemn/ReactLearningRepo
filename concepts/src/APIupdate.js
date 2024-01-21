
import React, { useState } from 'react';
import axios from 'axios';

export default function APIupdate() {
    const url = 'http://localhost:3001/employees';
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${url}/${id}`, { email });
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };

    return (
        <div>
            <h1>Update Employee</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                    placeholder="Employee ID" 
                />
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="New Email" 
                />
                <button type="submit">Update Employee</button>
            </form>
        </div>
    );
}
