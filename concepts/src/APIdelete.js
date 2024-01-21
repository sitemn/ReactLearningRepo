

import React, { useState } from 'react';
import axios from 'axios';

export default function APIdelete() {
    const url = 'http://localhost:3001/employees';
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`${url}/${id}`);
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

    return (
        <div>
            <h1>Delete Employee</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                    placeholder="Employee ID" 
                />
                <button type="submit">Delete Employee</button>
            </form>
        </div>
    );
}
