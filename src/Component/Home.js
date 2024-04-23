import React from 'react'
import ImageSlider from './ImageSlider'
import { Link } from 'react-router-dom'

export default function Home() {
	
	return (
		
		<div className='home-container'>
			<div className='info-home-container'>
				<h2 className='home-text'>Best <b id='home-text'>Wash & Iron service</b><br />
					in your doorstep</h2>
				<br />
				<span id='vastrashuddhi'>VastraShuddhi</span> <span>is the first Online Laundry Platform for dry cleaning and laundry. Our services combine our expertise and experience acquired over a period of time to provide you with clean laundry in the shortest possible turnaround time.</span><br />
	
				<Link to="/services" className='btn-viewServices' style={{textDecoration:'none', }} >View Services</Link>
				
			</div>


			<div className='img-home-container' style={{textAlign:'center'}}>
				<ImageSlider />
			</div>

		</div>


	)
}
