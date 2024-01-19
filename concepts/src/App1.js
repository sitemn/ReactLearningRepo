import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Home from './Home';
import Service from './Service';
import Login from './Login';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";

export default function App1() {
    const [user, setUser] = useState();
    const [flag, setFlag] = useState(false);
    const handleSubmit = () => {
        if(user === "john"){
            setFlag(true);
        }
    };
    return (
    <div className="container">
        {!flag ? (
            <div>
            <h1>Login Page </h1>
            <p><input type="text" onChange={e => setUser(e.target.value)} placeholder='Enter Username'></input></p>
            <p><input type="text" placeholder='Enter Password'></input></p>
    
            <p>
                <button onClick={handleSubmit}>Login</button>
            </p>
        
        </div>
        ) : (
            <BrowserRouter>
            <div className="row">
                <div className="col-lg-4">
                    <p><Link to="/home">Home</Link> </p>
                    <p> <Link to="/service">Service</Link> </p>
                    {/* <p> <Link to="/login">Login</Link> </p> */}
                </div>
                <div className="col-lg-8">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="service" element={<Service />} />
                        {/* <Route path="login" element={<Login />} /> */}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        )

        }
        

    </div>
  )
}
