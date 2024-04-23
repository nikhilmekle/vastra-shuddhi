// MensWear.js

import React from 'react';

export default function MensWear({ addToCart }) {
    const names ={
        item1: "Suit (Blazer + Trouser)",
        item2: "Sherwani",
        item3: "Shirts",
        item4: "Shoes"
    }

    // Define variables for storing price of each item
    const prices = {
        suit: 150,
        sherwani: 100,
        shirts: 120,
        shoes: 100
    };

    // Function to add item to bag
    const addItemToCart = (itemName, itemPrice) => {
        addToCart(itemName, itemPrice);
    };

    return (
        <div>
            <ul className="ul-container">
                <li>
                    {names.item1} <br />
                    <span style={{ color: 'green', fontSize: '12px' }}>₹{prices.suit}</span><span style={{ fontSize: '10px' }}>/piece</span>
                    <button onClick={() => addItemToCart(names.item1, prices.suit)} style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', marginLeft: '300px' }}>Add to bag</button>
                </li>
                <hr />
                <li>
                     {names.item2}<br />
                    <span style={{ color: 'green', fontSize: '12px' }}>₹{prices.sherwani}</span><span style={{ fontSize: '10px' }}>/piece</span>
                    <button onClick={() => addItemToCart(names.item2, prices.sherwani)} style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', marginLeft: '300px' }}>Add to bag</button>
                </li>
                <hr />
                <li>
                    {names.item3} <br />
                    <span style={{ color: 'green', fontSize: '12px' }}>₹{prices.shirts}</span><span style={{ fontSize: '10px' }}>/piece</span>
                    <button onClick={() => addItemToCart(names.item3, prices.shirts)} style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', marginLeft: '300px' }}>Add to bag</button>
                </li>
                <hr />
                <li>
                    {names.item4} <br />
                    <span style={{ color: 'green', fontSize: '12px' }}>₹{prices.shoes}</span><span style={{ fontSize: '10px' }}>/piece</span>
                    <button onClick={() => addItemToCart(names.item4, prices.shoes)} style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', marginLeft: '300px' }}>Add to bag</button>
                </li>
                <hr />
            </ul>
        </div>
    );
}
