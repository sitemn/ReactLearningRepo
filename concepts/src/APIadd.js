
import React, { useState } from 'react';
import axios from 'axios';

export default function APIadd() {
    const url = 'http://localhost:3001/employees';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url, { name, email });
        } catch (error) {
            console.error("Error adding employee:", error);
        }
    };

    return (
        <div>
            <h1>ADD Employee</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Name" 
                />
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
}
