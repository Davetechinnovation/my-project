import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/contact.css'
import { Link } from 'react-router-dom';
import logo from '../image/logo1.png'


const features = () => {
  return (
    <div className="body">
      <div className='contact'>
        <div className="contact-us">
          <div className="logo-text">
           <Link to="/">
             <img src={logo} alt="My Logo" className='logo'/>
          </Link>
            <p >For Your Everyday Meal 😊✨🍻</p>
          </div>

          <h2>Contact card</h2>
          
          <a href="tel:+2349168071385" class="phone-link">
            <i class="bi bi-telephone-inbound"></i> &nbsp; <b>Phone:</b> +2349168071385
         </a>
         
          <a href="mailto:dandaveudoka@gmail.com" class="phone-link">
           <i class="bi bi-envelope-arrow-up"></i> &nbsp; <b>Email:</b> dandaveudoka@gmail.com
         </a>

         <a href="https://www.google.com/maps/search/?api=1&query=DDM Villa, Isuanaocha, Awka, Anambra State" class="phone-link" target="_blank"  rel="noopener noreferrer">
           <i class="bi bi-geo-alt"></i> &nbsp; <b>Address:</b> DDM Villa, Isuanaocha, Awka, Anambra State
         </a>

        </div>
        
     </div>
    </div>
    
  )
}

export default features;
