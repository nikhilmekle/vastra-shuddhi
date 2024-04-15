import React, { useState } from 'react';
import img from '../images/registerimg.avif'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Register() {

    const [name, setName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [contact, setContact] = useState(' ')
    const [address, setAddress] = useState(' ')
    const [password, setPassword] = useState(' ')

    async function handleSignUp(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3000/signup", { name, email, contact , address , password })

        } catch (error) {
            console.log(e)
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

                <p style={{border:'none'}} className='input-register'>if already have an account ? <Link to="/signin" className='btn-signUp' >SIGN IN</Link></p>
            </form>
        </div>
    )
}
