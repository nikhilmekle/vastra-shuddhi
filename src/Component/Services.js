import React from 'react';
import img1 from '../images/wash-iron.jpeg';
import img2 from '../images/wash-fold.jpeg';
import img3 from '../images/iron-fold.jpeg';
import { Link } from 'react-router-dom';

export default function Services() {
   return (
    <div>
     
      <div style={{ marginTop: '70px' }}>
        <h2 className='about-text zoom-in' style={{ textAlign: 'center' }}>Our Services</h2>
      </div>
  
      <div className='services-container'>
        <div className="card" id='card1'>
          <img className=" " src={img1} alt=" " />
          <div className="card-body">
            <h5 className="card-title" id='vastrashuddhi'>Wash & Iron</h5>
            <p className="card-text">All your regular wear garments will be washed, steam ironed and neatly packed for delivery.</p>
            <Link to="/services/wash-and-iron" className="btn btn-primary">Select Service</Link>
          </div>
        </div>
        <div className="card" id='card2'>
          <img className=" " src={img2} alt=" " />
          <div className="card-body">
            <h5 className="card-title" id='vastrashuddhi'>Wash & Fold</h5>
            <p className="card-text">Just in case you choose not to use our steam ironing services we will wash and fold them for you.</p>
            <Link to="/services/wash-and-fold"className="btn btn-primary" >Select Service</Link>
          </div>
        </div>
        <div className="card" id='card3'>
          <img className=" " src={img3} alt=" " />
          <div className="card-body">
            <h5 className="card-title" id='vastrashuddhi'>Iron & Fold</h5>
            <p className="card-text">Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.</p>
            <Link to="/services/iron-and-fold" className="btn btn-primary">Select Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
