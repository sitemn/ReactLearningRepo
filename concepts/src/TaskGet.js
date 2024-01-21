
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TaskGet() {
    const url = 'http://localhost:3002/todoList';
    const [tasks, setTasks] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(url);
        setTasks(response.data);
};

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            {tasks.map(task => (
                <div key={task.id}>
                    {task.id} - {task.task} - {task.isComplete ? 'Completed' : 'Pending'}
                </div>
            ))}
        </div>
    );
}

