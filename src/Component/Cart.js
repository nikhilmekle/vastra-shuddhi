import React from 'react';

export default function Cart({ cartItems, totalPrice }) {
    return (
        <div className="cart">
            <h4 style={{ textAlign: 'center' }}>Your Cart</h4>
            <h6 style={{ textAlign: 'center' }}>Total items: {cartItems.length}</h6>
            <hr />
            <ul className="ul-container">
                {cartItems.map((item, index) => (
                    <li key={index} style={{ fontSize: '16px', borderBottom: '1px solid black', height: '50px' }}>
                        {item.name} <br /><span style={{ color: 'green', position: 'absolute', right: '50px' ,}}>₹ {item.price}</span>
                    </li>
                ))}
                <li style={{ fontSize: '16px',fontWeight:'bold', border: 'none', height: '40px', marginTop:'30px'}}>
                    Sub Total <span style={{ color: 'green', position: 'absolute', right: '50px' }}>₹ {totalPrice}</span>
                </li>
                <li style={{ fontSize: '16px', fontWeight:'bold', border: 'none', height: '40px' }}>
                    Delivery Charges <span style={{ color: 'green', position: 'absolute', right: '50px' }}>₹ 0</span>
                </li>
                <li style={{ fontSize: '16px', fontWeight:'bold', border: 'none', height: '40px' }}>
                    Grand Total <span style={{ color: 'green', position: 'absolute', right: '50px' }}>₹ {totalPrice}</span>
                </li>
            </ul>
        </div>
    );
}
