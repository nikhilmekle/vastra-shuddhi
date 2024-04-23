import React, { useState } from 'react';
import img from '../images/registerimg.avif'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSignUp(e) {
        e.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:4000/api/auth/createuser", { name, email, contact, address, password });
            console.log(response); // Log the response object
            if (response && response.data && response.data.authtoken) {
                // Registration successful, show alert
                alert("Registration successful!");
                alert("Please Login!");
            }
        } catch (error) {
            console.log(error.response.data.error);
            setErrorMessage(error.response.data.error);
        }
    }
    
    

    return (
        <div className='card-container-register'>
            <form action="">
                <h2 className='Heading-login'>Sign Up</h2>
                <img className='img-register' src={img} alt="loading..." />
                <input className='input-register' type="text" placeholder='Name' onChange={(e) => { setName(e.target.value) }} />
                <input className='input-register' type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                <input className='input-register' type="number" placeholder='Contact Number' onChange={(e) => { setContact(e.target.value) }} />
                <input className='input-register' type="text" placeholder='Address' onChange={(e) => { setAddress(e.target.value) }} />
                <input className='input-register' type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />

                <input className='btn-register' type="submit" value="SIGN UP" onClick={handleSignUp} />
                
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <p style={{ border: 'none' }} className='input-register'>if already have an account ? <Link to="/signin" className='btn-signUp' >SIGN IN</Link></p>
            </form>
        </div>
    )
}
