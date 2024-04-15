import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import  logo from '../images/Vastrashuddhi.gif'


export default function Navbar() {
	
	return (
		<div>
			<nav>
			
				<input type='checkbox' id='check'></input>
				<label htmlFor="check" className='checkbtn'>
				<FontAwesomeIcon icon={faBars} />
				</label>
							
			
				<label htmlFor="logo" className="logo">	<img src={logo} alt=" " style={{width:'60px' , height:'auto',marginTop:'0px'}} /  >VastraShuddhi</label>
				<ul>
					<li><Link to='/home'>Home</Link></li>
					<li><Link to='/about'>About</Link></li>
					<li><Link to='/services'>Services</Link></li>
					<li><Link to='/signin'>Login</Link></li>
				</ul>
			</nav>
			
		</div>
	)
}
