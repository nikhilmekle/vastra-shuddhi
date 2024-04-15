import React from 'react'

export default function MensWear() {
	return (
		<div>
			<ul className="ul-container ">
				<li>Suit (Blazer + Trouser) <br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹150</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button style={{ fontSize: '13px', color:'white' ,background: '#0082e6', border: 'none', borderRadius: '15px' , marginLeft:'300px'}}>Add to bag</button>
				</li>	<hr />
				<li >Sherwani <br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹150</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button style={{ fontSize: '13px', color:'white' ,background: '#0082e6', border: 'none', borderRadius: '15px' , marginLeft:'300px'}}>Add to bag</button></li>	<hr />
				<li>Shirts <br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹150</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button style={{ fontSize: '13px', color:'white' ,background: '#0082e6', border: 'none', borderRadius: '15px' , marginLeft:'300px'}}>Add to bag</button></li>	<hr />
				<li >shoes <br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹150</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button style={{ fontSize: '13px', color:'white' ,background: '#0082e6', border: 'none', borderRadius: '15px' , marginLeft:'300px'}}>Add to bag</button></li>	<hr />
			</ul>
		</div>
	)
}
