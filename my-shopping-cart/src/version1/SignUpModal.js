import React from 'react'

export default function SignUpModal({ showModal, toggleModal, name, setName, userEmail, setUserEmail, userPass, setUserPass, hanldeUserSignUp }) {
  return (
    <div>
        <button 
            className="btn btn-primary" 
            style={{ bottom: '20px', right: '20px', zIndex: '1000' }} 
            onClick={toggleModal}>
            Create New Account
            </button>
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
  );
}
