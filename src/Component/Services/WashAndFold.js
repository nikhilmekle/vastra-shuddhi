import React, { useState } from 'react'

import { Link } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import MensWear from "./Categories/MensWear"; // Import the MensComponent
import WomensWear from "./Categories/WomensWear"; // Import the WomensComponent
import Households from "./Categories/Households";
import "./services.css";
export default function WashAndFold() {
	// State to track visibility status of components
	const [componentVisibility, setComponentVisibility] = useState({
		men: false,
		women: false,
		households: false,
		// Add more states for other categories if needed
	});

	// State to track rotation status of arrow icons
	const [arrowRotation, setArrowRotation] = useState({
		men: false,
		women: false,
		households: false,
	});

	// Function to toggle component visibility and arrow rotation
	const toggleComponent = (category) => {
		setComponentVisibility((prevVisibility) => ({
			...prevVisibility,
			[category]: !prevVisibility[category],
		}));
		setArrowRotation((prevRotation) => ({
			...prevRotation,
			[category]: !prevRotation[category],
		}));
	};

	return (
		<div>
			<div className="main-container">
				<div className="left-side-container">
					<h2 className="home-text">
						<b id="home-text">Wash & Fold service</b>
					</h2>
					<br />
					<ul className="ul-container">
						<li onClick={() => toggleComponent("men")} style={{ fontSize: '25px', }}>
							Men's wear{" "}
							<i className={`arrow right ${arrowRotation["men"] ? "rotate" : ""}`}></i>
						</li>	<hr />
						{componentVisibility["men"] && <MensWear />}
						<li onClick={() => toggleComponent("women")} style={{ fontSize: '25px', }}>
							Women's wear{" "}
							<i className={`arrow right ${arrowRotation["women"] ? "rotate" : ""}`}></i>
						</li>	<hr />
						{componentVisibility["women"] && <WomensWear />}
						<li onClick={() => toggleComponent("households")} style={{ fontSize: '25px', }}>
							Household and Accessories{" "}
							<i className={`arrow right ${arrowRotation["households"] ? "rotate" : ""}`}></i>
						</li>	<hr />
						{componentVisibility["households"] && <Households />}
					</ul>
				</div>


				<div className="right-side-container">
					<span className="mr-3" style={{ marginRight: "10px" }}>
						Want to go another service?
					</span>
					<UncontrolledDropdown className="btn-group">
						<DropdownToggle
							aria-expanded={false}
							aria-haspopup={true}
							caret
							color="danger"
							data-toggle="dropdown"
							type="button"
						>
							Select Service
						</DropdownToggle>
						<DropdownMenu>
						<Link to="/services/wash-and-iron">
								<DropdownItem>Wash & Iron</DropdownItem>
							</Link>
							<Link to="/services/wash-and-fold">
								<DropdownItem>Wash & Fold</DropdownItem>
							</Link>
							<Link to="/services/iron-and-fold" >
								<DropdownItem>Iron & Fold</DropdownItem>
							</Link>
						</DropdownMenu>
					</UncontrolledDropdown>
					<div style={{ marginTop: '50px' ,padding:'20px' }} className="bag">
						<h4 style={{textAlign:'center'}}>Your Bag</h4>
						<h6 style={{textAlign:'center'}}>Total items:0</h6>
						<hr />
						<ul className="ul-container " >
							<li style={{ fontSize: '16px', border: 'none', height: '40px' }}>Sub Total  <span style={{color:'green' , position:'absolute' , right:'50px'}}>₹ 0</span></li> 
							
							<li style={{ fontSize: '16px', border: 'none', height: '40px' ,}}>Delivery Charges <span style={{color:'green' , position:'absolute' , right:'50px'}}>₹ 0</span></li>

							<li style={{ fontSize: '16px', border: 'none', height: '40px' }}>Grand Total <span style={{color:'green' , position:'absolute' , right:'50px'}}>₹ 0</span></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
