import React from 'react'

export default function Households({ addToCart }) {

	const names ={
        item1: "Travel Bag",
        item2: "Blanket ",
        item3: "Towel",
        item4: "TableMat",
		item5: "Pillow"
    }

 // Define variables for storing price of each item
 const prices = {
	TravelBag: 100,
	Blanket: 150,
	Towel: 50,
	TableMat: 200,
	Pillow: 40
};


 // Function to add item to bag
 const addItemToCart = (itemName, itemPrice) => {
	addToCart(itemName, itemPrice);
};
	return (

		<div>
			<ul className="ul-container ">
				
				<li>{names.item1}<br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹{prices.TravelBag}</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button onClick={() => addItemToCart(names.item1, prices.TravelBag)}  style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', marginLeft:'300px' }}>Add to bag</button>
				</li>	<hr />


				<li >{names.item2}
				<br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹{prices.Blanket}</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button onClick={() => addItemToCart(names.item1, prices.Blanket)}  style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px',
					 marginLeft:'300px' }}>Add to bag</button></li>	<hr />


				<li>{names.item3} <br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹{prices.Towel}</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button onClick={() => addItemToCart(names.item1, prices.Towel)}  style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', 
					marginLeft:'300px' }}>Add to bag</button></li>	<hr />


				<li >{names.item4}<br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹{prices.TableMat}</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button onClick={() => addItemToCart(names.item1, prices.TableMat)}  style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', 
					marginLeft:'300px' }}>Add to bag</button></li>	<hr />


				<li >{names.item5} <br />
					<span style={{ color: 'green', fontSize: '12px' }}>₹{prices.Pillow}</span><span style={{ fontSize: '10px' }}>/piece</span>
					<button onClick={() => addItemToCart(names.item1, prices.Pillow)}  style={{ fontSize: '13px', color: 'white', background: '#0082e6', border: 'none', borderRadius: '15px', 
					marginLeft:'300px' }}>Add to bag</button></li>	<hr />
			</ul>
		</div>
	)
}
