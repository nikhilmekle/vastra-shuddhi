import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Component/Footer';
import HowITWork from './Component/HowITWork';
import WashAndIron from './Component/Services/WashAndIron';
import WashAndFold from './Component/Services/WashAndFold';
import IronAndFold from './Component/Services/IronAndFold';
import Register from './Component/Register';

function App() {
  document.body.style.backgroundColor='Snow'
  return (
    <Router>
      <div>
        <div style={{height:'10px'}}></div>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<AllComponents />} />
          <Route path="/home" element={<AllComponents />} />
          <Route path="/about" element={<AboutServices />} />
          <Route path="/services" element={<ServicesR />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />

          <Route path="/services/wash-and-iron" element={<WashAndIron />} />
          <Route path="/services/wash-and-Fold" element={<WashAndFold />} />
          <Route path="/services/iron-and-fold" element={<IronAndFold />} />
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

function AllComponents() {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <HowITWork/>
    </div>
  );
}

function AboutServices() {
  return (
    <div>
      <About />
      <Services />
      <HowITWork/>
    </div>
  );
}

function ServicesR() {
  return (
    <div>
      <Services />
      <HowITWork/>
    </div>
  );
}

export default App;
