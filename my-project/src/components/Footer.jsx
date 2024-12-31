import React, { useEffect } from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom';
import logo from '../image/logo1.png'


function Footer() {
  useEffect(() => {
    const updateYear = () => {
      const yearElement = document.getElementById('year');
      if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
      }
    };

    // Call the function immediately to set the initial year
    updateYear();

    // Optional: Set an interval to check for year change (if needed)
    const intervalId = setInterval(updateYear, 1000 * 60);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <hr />
      <div className="all">
        <Link to="/">
          <img src={logo} alt="My Logo" className="logo" />
        </Link>
        <strong>Food Recipes For Your Everyday Meal 😊✨🍻</strong>
        <p>
          &copy; <span id="year">2024</span> All rights reserved | Project by Udoka Dandave.
        </p>
      </div>
      <hr />
    </footer>
  );
}

export default Footer;