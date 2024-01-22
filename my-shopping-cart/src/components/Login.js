import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import useFetch from '../hooks/useFetch';
import axios from 'axios';


export default function Login() {
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [loginFlag, setLoginFlag] = useState(false);
    const [name, setName] = useState('');



    const url = "http://localhost:3001/users";
    const [data] = useFetch(url);

    const handleLogin = () => {        
        let found = data.find((user) => {
            return ((user.email === userEmail) && (user.password === userPass));
        })
        if(found){
            setLoginFlag(true);
        }
    };

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);

    const hanldeUserSignUp = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url, { name, userEmail, userPass });
        } catch (error) {
            console.error("Error adding users:", error);
        }
    };

  return (
    <div className='container'>
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
            <input 
                type="email" 
                value={userEmail} 
                onChange={(e) => setUserEmail(e.target.value)} 
                placeholder="Email" 
            /><br/>
            <input 
                type="password" 
                value={userPass} 
                onChange={(e) => setUserPass(e.target.value)} 
                placeholder="Password" 
            /><br/>
            <button type="submit">Login</button>
        </form>

        <button 
                className="btn btn-primary" 
                style={{ bottom: '20px', right: '20px', zIndex: '1000' }} 
                onClick={toggleModal}>
                Create New Account
            </button>
        <br />
        <br />

        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign Up</h5>
                            <button type="button" className="btn-close" onClick={toggleModal}></button>
                        </div>
                        <div className="modal-body">
                            <input 
                                type="text" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder="Name" 
                            /><br/>
                            <input 
                                type="email" 
                                value={userEmail} 
                                onChange={(e) => setUserEmail(e.target.value)} 
                                placeholder="Email" 
                            /><br/>
                            <input 
                                type="password" 
                                value={userPass} 
                                onChange={(e) => setUserPass(e.target.value)} 
                                placeholder="Password" 
                            /><br/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={hanldeUserSignUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
