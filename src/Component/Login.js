import React, { useState } from 'react';
import Register from './Register';
import img from '../images/loginimg.avif'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Login() {

    const [showRegister, setShowRegister] = useState(false);
    const [email , setEmail] = useState(' ');
    const [password , setPassword] = useState(' ');

    async function handleSignIn(e){
        e.preventDefault();

        try {
                await axios.post("http://localhost:3000/signin",{email , password})

        } catch (error) {
            console.log(e)
        }
    }
    
    return (
        <div className='login-container'>
            {showRegister ? (
                <Register onSignInClick={() => setShowRegister(false)} />
            ) : (
                <div className='card-container-login'>
                    <form action="POST"></form>
                    <h2 className='Heading-login'>Sign In</h2>
                    <img className='img-login' src={img} alt="loading..." />

                    <input className='input-login' type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>

                    <input className='input-login' type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>

                    <input className='btn-login' type="submit" value="SIGN IN" onClick={handleSignIn}/>
                    <p>Don't have an account? <Link to="/signup" className='btn-signUp' >SIGN UP</Link></p>
                </div>
            )}
        </div>
    )
}
