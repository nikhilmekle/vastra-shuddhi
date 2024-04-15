import React from 'react'
import service from '../images/wash-iron.jpeg'
import order from '../images/image6.png'
import schedule from '../images/image2.png'
import pickup from '../images/image3.jpeg'
import wash from '../images/iron-fold.jpeg'
import delivery from '../images/image5.png'
export default function HowITWork() {
	return (
		<div style={{backgroundColor:'lavender'}}>
			<h2 className='about-text zoom-in' style={{ textAlign: 'center', justifyContent: 'center' }}>How It Work</h2>
			<div className='work-container'>
				<div  className='info-work-container'>
					<div className="card" id='card' style={{width: '18rem'}}>
						<img className="card-img-top" src={service} alt=""/>
							<div className="card-body">
								<p className="card-text" id='vastrashuddhi'>Select Service</p>
							</div>
					</div>


					<div className="card" id='card'  style={{width: '18rem'}}>
						<img className="card-img-top" src={order}  alt=""/>
							<div className="card-body">
								<p className="card-text" id='vastrashuddhi'>Place order</p>
							</div>
					</div>


					<div className="card" id='card'  style={{width: '18rem'}}>
						<img className="card-img-top" src={schedule} alt=""/>
							<div className="card-body">
								<p className="card-text" id='vastrashuddhi'>Set Schedule</p>
							</div>
					</div>

					<div className="card" id='card'  style={{width: '18rem'}}>
						<img className="card-img-top" src={pickup} alt=""/>
							<div className="card-body">
								<p className="card-text" id='vastrashuddhi'>Pick up</p>
							</div>
					</div>

					<div className="card" id='card'  style={{width: '18rem'}}>
						<img className="card-img-top" src={wash} alt=""/>
							<div className="card-body">
								<p className="card-text" id='vastrashuddhi'>Wash & Iron</p>
							</div>
					</div>

					<div className="card" id='card'  style={{width: '18rem'}}>
						<img className="card-img-top" src={delivery} alt=""/>
							<div className="card-body">
								<p className="card-text" id='vastrashuddhi'>Delivery</p>
							</div>
					</div>

				</div>
			</div>
		</div>
	)
}
