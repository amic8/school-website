import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact=()=>{
  const navigate=useNavigate();
  const[formData,setFormData]=useState({
    fname:'',lname:'',phone:'',email:'',message:''});
const [submitted,setSubmitted]=useState(false);
const handleChange=(e)=>{
  const {name,value}=e.target;
  setFormData((prev)=> ({
    ...prev,
    [name]:value
  }));
 };

const handleSubmit=(e)=>{
  e.preventDefault();
  setSubmitted(true);
  setFormData({fname:'',lname:'',phone:'',email:'',message:''});
};
  
  return(
  <>
  <div className="contact-page">
      <div className="contact-right">
        <h2>Contact Us</h2>
        {submitted ? (
          <p className="confirmation-msg">Thank you!<br/> We will contact you soon.</p>) : (
          <form onSubmit={handleSubmit}>
            <input type="text" name="fname" placeholder="First Name" value={formData.fname}
              onChange={handleChange}required/><br/> 
            <input type="text" name="lname" placeholder="Last Name" value={formData.lname}
              onChange={handleChange}required/><br/>
            <input type="text" name="phone" placeholder="Phone" value={formData.phone}
              onChange={handleChange} required/><br/>
            <input type="email" name="email" placeholder="Email Id" value={formData.email}
              onChange={handleChange} required/><br/>
            <textarea name="message" placeholder="Enter Message" rows="4" value={formData.message}
              onChange={handleChange}required></textarea><br/>
          <button type="submit">Send Message</button>
          <div className="nav-buttons">
        <button onClick={() => navigate('/login')}>Back</button>
        <button onClick={() => navigate('/home')}>Next</button>
     </div>
        </form>)}
      </div>
       
     </div>
    </>
  );
};

export default Contact;
