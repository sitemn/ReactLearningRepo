import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskAdd from './TaskAdd';
import TaskDelete from './TaskDelete';
import TaskUpdate from './TaskUpdate';
import TaskGet from './TaskGet';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

export default function ToDoV2() {
    return (
        

<Router>
<div className="row">
    <div className="col-lg-4">
        <p> <Link to="/">Todo List</Link> </p>
        <p><Link to="/create">Add Task</Link> </p>
        <p> <Link to="/update">Update Task</Link> </p>
        <p> <Link to="/delete">Delete Task</Link> </p>
    </div>
    <div className="col-lg-8">
        <Routes>
                <Route path="/" element={<TaskGet />} />
                <Route path="/create" element={<TaskAdd />} />
                <Route path="/update" element={<TaskDelete />} />
                <Route path="/delete" element={<TaskUpdate />} />
        </Routes>
    </div>
</div>
</Router>
    );
}
