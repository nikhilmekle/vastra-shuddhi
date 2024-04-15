import React from 'react'

export default function Footer() {
	return (
		<div style={{ backgroundColor: 'LightSlateGray', height: '250px', width: '100%' }}>
			<div className='footer-container'>
				<a id='footer-text' href="/admin">Admin Panel</a>
				<div  className='footer-text'>
				<span>VastraShuddhi Website</span><br/>
				<span>Email : vastrashuddhi.support@gmail.com</span><br/>
				<span>Phone : +91 8956772646</span>
				</div>
				
			</div>

		</div>
	)
}
