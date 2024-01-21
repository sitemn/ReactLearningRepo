import React, { useState } from 'react';
import axios from 'axios';

export default function TaskDelete() {
    const url = 'http://localhost:3002/todoList';
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`${url}/${id}`);
            setId('');
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={id} 
                onChange={(e) => setId(e.target.value)} 
                placeholder="Task ID" 
            />
            <button type="submit">Delete Task</button>
        </form>
    );
}
