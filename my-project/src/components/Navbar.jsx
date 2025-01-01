import React, { useState  } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { Link as Scroll } from "react-scroll";
import logo from '../image/logo1.png'
import Friedrice from '../pages/friedrice'
import Cocktail from '../pages/cocktail';
import Pad from '../pages/pad'
import Pizza from '../pages/pizza';
import Borani from '../pages/borani';
import Poutine from '../pages/poutine'
import Porkolt from '../pages/porkolt';
import Hainan from '../pages/Hainan';
import Shirazi from '../pages/shirazi';
import Ayam from '../pages/ayam';
import Chasu from '../pages/chasu';
import Lebanon from '../pages/Lebanon';
import Lamb from '../pages/lamb';
import Buta from '../pages/buta';
import Fajitas from '../pages/fajitas';
import Tikka from '../pages/tikka';
import Egusi from '../pages/egusi';
import Injera from '../pages/injera';
import Tagine from '../pages/tagine';
import Jollof from '../pages/jollof';
import Bobotie from '../pages/bobotie';
import Matooke from '../pages/matooke';
import Suya from '../pages/suya';
import Kenkey from '../pages/kenkey';
import Maafe from '../pages/maafe';
import Okra from '../pages/okra';
import Chak from '../pages/chak';
import Spaghetti from '../pages/spaghetti';
import Yam from '../pages/yam';
import Groundnut from '../pages/groundnut';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

 

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const routes = [
    { path: "/friedrice", name: "Fried Rice", component: Friedrice },
    { path: "/cocktail", name: "Cocktail", component: Cocktail },
    { path: "/poutine", name: "Poutine", component: Poutine },
    { path: "/porkolt", name: "porkolt", component: Porkolt },
    { path: "/Hainan", name: "Hainan", component: Hainan },
    { path: "/Shirazi", name: "Shirazi", component: Shirazi },
    { path: "/Ayam", name: "Ayam", component: Ayam },
    { path: "/Chasu", name: "Chasu", component: Chasu },
    { path: "/Lebanon", name: "Lebanon", component: Lebanon },
    { path: "/Lamb", name: "Lamb", component: Lamb },
    { path: "/Fajitas", name: "Fajitas", component: Fajitas },
    { path: "/Tikka", name: "Tikka", component: Tikka },
    { path: "/Tagine", name: "Tagine", component: Tagine },
    { path: "/Egusi", name: "Egusi", component: Egusi },
    { path: "/Injera", name: "Injera", component: Injera },
    { path: "/Buta", name: "Buta", component: Buta },
    
    {
      path: "/Jollof",
      name: "Jollof Rice ",
      component: Jollof
      },
      {
      path: "/Buta",
      name: "Buta",
      component: Buta
      },
      {
      path: "/Bobotie",
      name: "Bobotie",
      component: Bobotie
      },
      {
      path: "/Matooke",
      name: "Matooke",
      component: Matooke
      },
      {
      path: "/Suya",
      name: "Suya",
      component: Suya
      },
      {
      path: "/Kenkey",
      name: "Kenkey",
      component: Kenkey
      },
      {
      path: "/Maafe",
      name: "Maafe",
      component: Maafe
      },
      {
      path: "/Okra",
      name: "Okra",
      component: Okra
      },

      {
        path: "/Chak",
        name: "Chak",
        component: Chak
     },

      {
        path: "/Pizza",
        name: "Pizza",
        component: Pizza
     },

    {
    path: "/Borani",
    name: "Borani",
    component: Borani
    },

    { path: "/Yam", name: "Yam", component: Yam },

    { path: "/Spaghetti", name: "Spaghetti", component: Spaghetti },

    { path: "/Groundnut", name: "Groundnut", component: Groundnut },

    { path: "/Pad", name: "Pad-Thai", component: Pad },
     
  ];
  



  return (
    <div id='nav-container' className='nav-container'>
    <div className="nav-content">
      <hr /><p>Food Recipes For Your Everyday Meal 😊✨🍻</p><hr />

      <div className="header-image">
          <Link to="/">
            <img src={logo} alt="My Logo" className='logo'/>
          </Link>

          <div className="navbars">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              
             
              <li  className='dan' onMouseEnter={() => setDropdownVisible(true)} onMouseLeave={() => setDropdownVisible(false)} 
                   
                >
                  <li><Scroll to="recepe" spy={true} smooth={true} offset={-35} duration={800}>Reciepes</Scroll></li>
                    {isDropdownVisible && (
                   
                     
                        <div className="dropdown-menu" >
                          <div className="dron">
                          <div className="dro">
                          
                          {routes.map((route) => (
                            <ul>
                               <li key={route.name}>
                              <Link to={route.path}>{route.name}</Link>
                            </li>
                            </ul>
                           
                          ))}
                          
                        </div>
                          </div>
                           
                            
                        </div>
                   
                       
                   )}
                </li>
            </ul>
          </div>
       </div>

        <div id='nav-container' className="all-nav">
          
          <div className="nav">
            <ul className={`nav ${isOpen ? 'show' : ''}`} >

            <div className={`hamburgerico ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
           </div>

              <h3>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                </h3>
                <li className='dave'
                    onMouseEnter={() => setDropdownVisible(true)} 
                    onMouseLeave={() => setDropdownVisible(false)}
                >
                   <Scroll to="recepe/" spy={true} smooth={true} offset={-35} duration={800}><h4>Reciepes</h4></Scroll>
                    {isDropdownVisible && (
                        <div className="dropdow-menu">
                           <div className="drop">
                           {routes.map((route) => (
                            <li key={route.name}>
                              <Link to={route.path}>{route.name}</Link>
                            </li>
                          ))}
                           </div>
                            
                            
                            
                        </div>
                   )}
                    
                </li>

               
             
             

            </ul>
         </div>

         <div className={`hamburgericon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            
        </div>
        </div>
      
      </div>
  </div>
  );
};

export default Navbar;