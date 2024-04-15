import React from 'react'
import logo from '../images/Vastrashuddhi1.gif'
export default function About() {

	return (
		<div style={{ backgroundColor: 'AliceBlue',  }}>
			<div style={{marginTop: '70px'}}><h2 className='about-text zoom-in' style={{ textAlign: 'center', justifyContent: 'center' }}>About Us</h2></div>
			<div className='about-container'>

				<div className='img-about-container'>
					<img src={logo} alt="" />
				</div>
				<div className='info-about-container'>
					<p><span id='vastrashuddhi'>VastraShuddhi</span>  is your premier destination for hassle-free laundry services. Our mission is to provide convenient, reliable, and affordable solutions that fit seamlessly into your busy lifestyle. With state-of-the-art facilities and a dedicated team, we ensure your clothes are treated with care and attention to detail. Say goodbye to laundry day stress and hello to fresh, clean clothes without the hassle. Join us at <span id='vastrashuddhi'>VastraShuddhi</span> and experience the difference today.</p>
					<p>
						Thank you for choosing <span id='vastrashuddhi'>VastraShuddhi !</span>
					</p>
				</div>
			</div>
		</div>
	)
}
