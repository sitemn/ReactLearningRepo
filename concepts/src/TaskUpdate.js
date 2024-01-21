import React, { useState } from 'react';
import axios from 'axios';

export default function TaskUpdate() {
    const url = 'http://localhost:3002/todoList';
    const [id, setId] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${url}/${id}`, { isComplete });
            setId('');
            setIsComplete(false);
        } catch (error) {
            console.error('Error updating task:', error);
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
            <input 
                type="checkbox" 
                checked={isComplete} 
                onChange={(e) => setIsComplete(e.target.checked)} 
            />
            <button type="submit">Update Task</button>
        </form>
    );
}
