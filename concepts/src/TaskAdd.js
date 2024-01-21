
import React, { useState } from 'react';
import axios from 'axios';

export default function TaskAdd() {
    const url = 'http://localhost:3002/todoList';
    const [task, setTask] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url, { task, isComplete: false });
            setTask('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Add new task" 
            />
            <button type="submit">Add Task</button>
        </form>
    );
}
