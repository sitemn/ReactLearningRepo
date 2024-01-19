import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Posts from "./Posts";
import Albums from "./Albums";

export default function App2() {
    const [userId, setUserId] = useState('');
    const [loginFlag, setLoginFlag] = useState(false);
    const handleLogin = () => {
        setLoginFlag(true);
    };

  return (
    <div className="container">
        {!loginFlag ? (
            <div>
                <input type="text" onChange={(e)=>setUserId(e.target.value)}></input>
                <button onClick={handleLogin}>Login</button>
            </div>
        ) : (
            <BrowserRouter>
            <div className="row">
                <div className="col-lg-4">
                    <p><Link to="/posts">Posts</Link> </p>
                    <p> <Link to="/albums">Albums</Link> </p>
                </div>
                <div className="col-lg-8">
                    <Routes>
                        <Route index element={<Posts userId={userId}  />} />
                        <Route path="posts" element={<Posts userId={userId}  />} />                    
                        <Route path="albums" element={<Albums userId={userId}  />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        )

        }
        

    </div>
  )
}
