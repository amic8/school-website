import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './Uniform';

function Login() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(e) => {
        e.preventDefault();
        if(username&&password){
             navigate('/uniform');}
        else{
             alert("Please fill in the fields");}
    };   
    
return (
  <>
   <div className='login-container'>
    <h2>Login Page</h2>
    <form onSubmit={handleSubmit}>
     <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}
      required/><br/>
     <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}
      required/><br/>
     <button type="submit">Login</button>
    </form></div>
    <div className="nav-buttons">
        <button onClick={() => navigate('/about')}>Back</button>
        <button onClick={() => navigate('/contact')}>Next</button>
      </div>
  </>
 );
}
export default Login;
 