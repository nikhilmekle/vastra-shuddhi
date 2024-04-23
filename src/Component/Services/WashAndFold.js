import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MensWear from './Categories/MensWear';
import WomensWear from './Categories/WomensWear';
import Households from './Categories/Households';
import Cart from '../Cart'; // Assuming you have a Cart component similar to the one used in IronAndFold
import './services.css';

export default function WashAndFold() {
    // State to track visibility status of components
    const [componentVisibility, setComponentVisibility] = useState({
        men: false,
        women: false,
        households: false,
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

    // State to track cart items and total price
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // Function to add item to cart
    const addToCart = (itemName, itemPrice) => {
        const newItem = { name: itemName, price: itemPrice };
        setCartItems([...cartItems, newItem]);
        setTotalPrice(totalPrice + itemPrice);
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
                        <li onClick={() => toggleComponent('men')} style={{ fontSize: '25px' }}>
                            Men's wear <i className={`arrow right ${arrowRotation['men'] ? 'rotate' : ''}`}></i>
                        </li>
                        <hr />
                        {componentVisibility['men'] && <MensWear addToCart={addToCart} />}
                        <li onClick={() => toggleComponent('women')} style={{ fontSize: '25px' }}>
                            Women's wear <i className={`arrow right ${arrowRotation['women'] ? 'rotate' : ''}`}></i>
                        </li>
                        <hr />
                        {componentVisibility['women'] && <WomensWear addToCart={addToCart} />}
                        <li onClick={() => toggleComponent('households')} style={{ fontSize: '25px' }}>
                            Household and Accessories{' '}
                            <i className={`arrow right ${arrowRotation['households'] ? 'rotate' : ''}`}></i>
                        </li>
                        <hr />
                        {componentVisibility['households'] && <Households addToCart={addToCart} />}
                    </ul>
                </div>

                <div className="right-side-container">
                    <span className="mr-3" style={{ marginRight: '10px' }}>
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
                            <Link to="/services/iron-and-fold">
                                <DropdownItem>Iron & Fold</DropdownItem>
                            </Link>
                        </DropdownMenu>
                    </UncontrolledDropdown>
					<div style={{ marginTop: '50px', padding: '20px' }} className="bag">
                    <Cart cartItems={cartItems} totalPrice={totalPrice} />
					</div>
                </div>
            </div>
        </div>
    );
}
