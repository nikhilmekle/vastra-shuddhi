import React from 'react'

export default function WomensWear({ addToCart }) {

	const names ={
        item1: "Saree (Plain Cotton / Plain Silk / Cotton Design)",
        item2: "Kameez / Kaftan / Apron / Tops ",
        item3: "Accessories (Scarf / Dupatta / Orna / Muffler)",
        item4: "Long Dress (Borka /Jumpsuit / Arabian Dress)"
    }

	// Define variables for storing price of each item
	const prices = {
		Saree: 100,
		Kameez: 35,
		Accessories: 50,
		LongDress: 60
	};

 // Function to add item to bag
    const addItemToCart = (itemName, itemPrice) => {
        addToCart(itemName, itemPrice);
    };

	return (

		<div>
			<ul className="ul-container ">
				<li>{names.item1}<br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹{prices.Saree}</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button onClick={() => addItemToCart(names.item1, prices.Saree)}  style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', marginLeft: '300px' }}>Add to bag</button>
				</li>	<hr />


				<li >{names.item2}<br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹{prices.Kameez}</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button onClick={() => addItemToCart(names.item2, prices.Kameez)} style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', marginLeft: '300px' }}>Add to bag</button></li>	<hr />


				<li>{names.item3} <br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹{prices.Accessories}</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button onClick={() => addItemToCart(names.item3, prices.Accessories)}style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', marginLeft: '300px' }}>Add to bag</button></li>	<hr />


				<li >{names.item4} <br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹{prices.LongDress}</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button onClick={() => addItemToCart(names.item4, prices.LongDress)}style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', marginLeft: '300px' }}>Add to bag</button></li>	<hr />
			</ul>
		</div>
	)
}
