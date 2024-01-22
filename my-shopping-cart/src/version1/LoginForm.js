import React from 'react'

export default function LoginForm({ userEmail, setUserEmail, userPass, setUserPass, handleLogin }) {
  return (
    <div>
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
            <button type="submit" >Login</button>
        </form>
    </div>
  )
}
