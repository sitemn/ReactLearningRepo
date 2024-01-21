
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import APIget from './APIget'; // Import your APIget component
import APIadd from './APIadd';
import APIdelete from './APIdelete';
import APIupdate from './APIupdate';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

export default function CRUDoperations() {
    return (
        

<Router>
<div className="row">
    <div className="col-lg-4">
        <p> <Link to="/">Home</Link> </p>
        <p><Link to="/create">Create Employee</Link> </p>
        <p> <Link to="/update">Update Employee</Link> </p>
        <p> <Link to="/delete">Delete Employee</Link> </p>
    </div>
    <div className="col-lg-8">
        <Routes>
                <Route path="/" element={<APIget />} />
                <Route path="/create" element={<APIadd />} />
                <Route path="/update" element={<APIupdate />} />
                <Route path="/delete" element={<APIdelete />} />
        </Routes>
    </div>
</div>
</Router>
    );
}
