import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { Link as Scroll } from "react-scroll";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../image/poutine.jpg'
import img2 from '../image/pizza.jpg'
import img3 from '../image/cocktail.jpg'
import img4 from '../image/friedrice.jpg'
import Foreign from '../image/foreign dishes.jpg'
import Local from '../image/Local dishes.png'
import img5 from '../image/Chicken Fajitas.jpg'
import img6 from '../image/Chicken Tikka Masala.jpg'
import img7 from '../image/Pad Thai.jpg'
import img8 from '../image/Injera (Ethiopia).jpg'
import img9 from '../image/Jollof Rice.jpg'
import img10 from '../image/Tagine (North Africa).jpg'
import img11 from '../image/porkolt.jpeg'
import img12 from '../image/hainan.jpeg'
import img13 from '../image/shirai.jpeg' 
import img14 from '../image/ayam.jpeg' 
import img15 from '../image/borani1.png'
import img16 from '../image/chasu.png'
import img17 from '../image/Lebanon.png'
import img18 from '../image/lamb1.jpg'
import img19 from '../image/buta.png'
import img20 from '../image/egusi.jpeg'
import img21 from "../image/bobotie.jpg"
import img22 from '../image/matooke.jpg'
import img23 from '../image/suya.jpg'
import img24 from '../image/kenkey.jpg'
import img25 from '../image/maafe.jpg'
import img26 from '../image/okra.jpeg'
import img27 from '../image/chak.jpg'
import img28 from '../image/malva.jpg'
import img29 from '../image/yam.png'
import img30 from '../image/spaghetti.jpg'
import img31 from '../image/groundnut.jpg'

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 100) {
              setShowButton(true);
          } else {
              setShowButton(false);
          }
      };

      window.addEventListener("scroll", handleScroll); 

      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  const scrollToTop = () => {
      window.scrollTo({ 
          top: 0, 
          behavior: "smooth" 
      });
  };

   
    const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    
   };

   useEffect(() => {
    AOS.init({
        duration: 1000, 
        once: false,
    });
}, []);



  return (
    <div id='home' className='home'>
       <Slider {...settings}>
      <div className="images">
        <img src={img1} alt="poutine" />
        <div className="overlay-text" >
            <div className="text">
                <b>Poutine meal</b>
                <p>If you're looking for the perfect balance of crispy, cheesy, and savory goodness, poutine is the answer. Hailing from Canada, this iconic dish is a culinary masterpiece, combining golden fries, gooey cheese curds, and rich gravy into a bowl of pure bliss. But what makes our poutine the ultimate indulgence? Let us take you on a flavor journey that you won’t forget!</p>
                <Link to ="/poutine" ><button>See Reciepe</button></Link>
            </div>
           
        </div>
      </div>
      <div className="images">
        <img src={img2} alt="pizza" />
        <div className="overlay-text">
            <div className="text">
                <b>Pizza</b>
                <p>There's something magical about the perfect pizza. The golden crust, bubbling cheese, and fresh toppings come together to create a masterpiece that is as comforting as it is irresistible. Our pizza is not just food—it’s a celebration of flavor, crafted to make every bite memorable.</p>
                <Link to = "/pizza"><button>See Reciepe</button></Link>
            </div>
           
        </div>
      </div>
      <div className="images">
        <img src={img3} alt="cocktail" />
        <div className="overlay-text">
            <div className="text">
                <b>Cocktail</b>
                <p>Imagine the perfect blend of elegance and flavor, all in one glass. Our cocktail is not just a drink—it’s an experience. Crafted with precision and passion, this masterpiece combines the finest ingredients to create a symphony of taste that will leave you craving more.</p>
                <Link to = "/cocktail" ><button>See Reciepe</button></Link>
            </div>
           
        </div>
      </div>
      <div className="images">
        <img src={img4} alt="friedrice" />
        <div className="overlay-text">
            <div className="text">
                <b>Fried-rice</b>
                <p>When it comes to comfort food with an international twist, fried rice reigns supreme. Bursting with bold flavors, fresh ingredients, and a perfect harmony of textures, our fried rice is the ultimate crowd-pleaser. Whether you're a food lover seeking an exciting meal or just craving something satisfying, this dish delivers on all fronts.</p>
                <Link to="/friedrice" ><button>See Reciepe</button></Link>
            </div>
           
        </div>
      </div>
     </Slider>


     <div className="home-content">
        <div id='reciepe' className="home-img">
          <div className="foreign-image">
            <img src= {Foreign} alt="Foreign img"  />
            <div className="foreign-text">
            <Scroll to="paralax" spy={true} smooth={true} offset={-35}  duration={800} >
              <h3>Foreign Reciepes</h3>
              <p>Click to see reciepe   <i className="bi bi-box-arrow-down" ></i> </p>
            </Scroll>
             
            </div>
          </div>
         <div className="foreign-image">
           <img src= {Local} alt="Local img" />
           <div className="foreign-text">
           <Scroll to="Local-meals" spy={true} smooth={true} offset={-35}  duration={800} >
           <h3>Local Reciepes</h3>
           <p>Click to see reciepe  <i className="bi bi-box-arrow-down" ></i>  </p>
           </Scroll>
            
           
           </div>
         </div>
          
        </div>
        {showButton && (
        <div className="scroll-button" onClick={scrollToTop}>
        <Scroll to="nav-container" spy={true} smooth={true} offset={-35} duration={3000}>
            <b>^</b>
        </Scroll>
    </div>
)}
         <div className="best-dish">
            <h2>Best Dishes</h2>
            <div className="bestdishe">
              <div className="best-meal">
                <img src={img5} alt="Foreign dish" />
                <div className="best-text">
                  <h2>Chicken Fajitas</h2>
                  <Link to="/fajitas"><p>Click to See reciepe</p></Link>
                </div>
              </div>
              <div className="best-meal">
               <img src={img6} alt="foreign dish" />
               <div className="best-text">
                <h2>Chicken Tikka Masala</h2>
                <Link to="/tikka"><p>Click to See reciepe</p></Link>
               </div>
              </div>
               <div className="best-meal">
               <img src={img7} alt="Foreign dish" />
               <div className="best-text">
                <h2>Pad Thai</h2>
                <Link to="/pad"> <p>Click to See reciepe</p></Link>
               </div>
              </div>
              <div className="best-meal">
               <img src={img8} alt="Local dish" />
               <div className="best-text">
                <h2> Injera (Ethiopia)</h2>
                <Link to="/injera"><p>Click to See reciepe</p></Link>
               </div>
              </div>
              <div className="best-meal">
               <img src={img9} alt="Local dish" />
               <div className="best-text">
                <h2>Jollof rice (West Africa)</h2>
                <Link to="/jollof"> <p>Click to see reciepe</p></Link>
               </div>
              </div>
              <div className="best-meal">
                <img src={img10} alt="Local dish" />
                <div className="best-text">
                  <h2>Tagine (North Africa)</h2>
                  <Link to="/tagine"><p>Click to See reciepe</p></Link>
                </div>
              </div>
            </div>
            
          </div>
       
       
        <div id='paralax' class="parallax">
          <div class="paralllax">
            <h1>Foreign Dishes</h1>
            <p>Global Cuisine Awaits! Discover mouth-watering foreign recipes from Korea to India, Morocco to Italy, and many more! Explore new flavors, ingredients, and cooking techniques to elevate your culinary game! Click below to unlock the full recipes and start cooking your way around the world!</p>
          </div>
        </div>
     
     
     <div className="complete">
        <div className="complete-meals">
          <div className="c-image">

            <div className="c-im">
              <img src={img11} alt="" />
            </div>
           <div className="c-text">
            <strong> Hungary <br /> <br /></strong>
            <Link to = '/porkolt'> <b> Pörkölt (Hungarian Beef Stew) <br /> <br /></b></Link>
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
           </div>
        
          </div>
          <div className="c-image">

            <div className="c-im"><img src={img12} alt="" /></div>
           
           <div className="c-text">
           <strong> Chinese <br /> <br /></strong>
            <Link to = './hainan' ><b>Hainan Chicken and Rice</b> <br /> <br /></Link>
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
           </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img13} alt="" /></div>
           
           <div className="c-text">
           <strong> Iranian <br /> <br /></strong>
            <Link to = '/shirazi'><b>Shirazi Salad </b> <br /> <br /></Link> 
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
           </div>
          </div>



          <div className="c-image">

            <div className="c-im"> <img src={img15} alt="" /></div>
          
           <div className="c-text">
           <strong> Afghanistan <br /> <br /></strong>
            <Link to = '/borani'><b>Borani Kadoo sqash Salad</b> <br /> <br /></Link> 
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
           </div>
          </div>

           
          <div className="c-image">

            <div className="c-im"><img src={img14} alt="" /></div>
           
           <div className="c-text">
           <strong> Malaysia <br /> <br /></strong>
            <Link to = '/ayam'><b>Ayam Goreng  </b> <br /> <br /></Link> 
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
           </div>
          </div> 
        
           
          <div className="c-image">

            <div className="c-im"><img src={img16} alt="" /></div>
          
           <div className="c-text">
           <strong> Japan <br /> <br /></strong>
            <Link to = '/chasu'><b>Chashu Don Pork </b> <br /> <br /></Link> 
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
           </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img17} alt="" /></div>

            <div className="c-text">
              <strong> Lebanon <br /> <br /></strong>
              <Link to = '/Lebanon'><b>Baba Ghanoush  Eggplant Dip </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img18} alt="" /></div>
           <div className="c-text">
              <strong> Jordan <br /> <br /></strong>
              <Link to = '/Lamb'><b>Lamb Mansaf  Lamb and Rice </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>
          
          <div className="c-image">

            <div className="c-im"><img src={img19} alt="" /></div>
            <div className="c-text">
              <strong> Jordan <br /> <br /></strong>
              <Link to = '/buta'><b>Buta Kakuni  Braised Pork </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

            
          <div className="c-image">

            <div className="c-im"><img src={img5} alt="" /></div>
            <div className="c-text">
              <strong> Texas, USA <br /> <br /></strong>
              <Link to = '/fajitas'><b>Chicken Fajitas </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img6} alt="" /></div>
            <div className="c-text">
              <strong> United Kingdom <br /> <br /></strong>
              <Link to = '/tikka'><b>Chicken Tikka Masala </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img7} alt="" /></div>
            <div className="c-text">
              <strong> Thailand <br /> <br /></strong>
              <Link to = '/pad'><b>Pad Thai </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img2} alt="" /></div>
            <div className="c-text">
              <strong> Italy <br /> <br /></strong>
              <Link to = '/pizza'><b>Pizza </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img1} alt="" /></div>
            <div className="c-text">
              <strong> Canada <br /> <br /></strong>
              <Link to = '/poutine'><b>Poutine Meal </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img3} alt="" /></div>
            <div className="c-text">
              <strong>  United States <br /> <br /></strong>
              <Link to = '/cocktail'><b>Cocktail </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

        </div>

        
     </div>







































       <div id='Local-meals' class="Local-meals">
          <div class="local-meal-content">
            <h1>Local Dishes</h1>
            <p>Experience the Vibrant Flavors of Africa! Uncover the secrets of traditional dishes from the Sahara to the Cape, and from the Horn to the Niger Delta! Discover new aromas, ingredients, and cooking methods to take your cooking to the next level! Click below to unlock the full recipes and embark on a culinary journey across Africa!</p>
          </div>

         
        </div>
        
        <div className="complete">
        <div className="complete-meals">
          <div className="c-image">

            <div className="c-im">
              <img src={img20} alt="" />
            </div>
           <div className="c-text">
            <strong> Nigeria <br /> <br /></strong>
            <Link to = '/egusi'> <b> Egusi soup  <br /> <br /></b></Link>
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
           </div>
        
          </div>
          <div className="c-image">

            <div className="c-im"><img src={img8} alt="" /></div>
           
           <div className="c-text">
           <strong> Ethiopia <br /> <br /></strong>
            <Link to = './injera' ><b>Injera (Ethiopia)</b> <br /> <br /></Link>
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
           </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img10} alt="" /></div>
           
           <div className="c-text">
           <strong> Morocco <br /> <br /></strong>
            <Link to = '/tagine'><b>Tagine  </b> <br /> <br /></Link> 
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
           </div>
          </div>



          <div className="c-image">

            <div className="c-im"> <img src={img9} alt="" /></div>
          
           <div className="c-text">
           <strong>  (Nigeria/Ghana) <br /> <br /></strong>
            <Link to = '/jollof'><b> Jollof Rice</b> <br /> <br /></Link> 
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
           </div>
          </div>

           
          <div className="c-image">

            <div className="c-im"><img src={img21} alt="" /></div>
           
           <div className="c-text">
           <strong> South Africa <br /> <br /></strong>
            <Link to = '/bobotie'><b> Bobotie   </b> <br /> <br /></Link> 
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
           </div>
          </div> 
        
           
          <div className="c-image">

            <div className="c-im"><img src={img22} alt="" /></div>
          
           <div className="c-text">
           <strong> Uganda <br /> <br /></strong>
            <Link to = '/matooke'><b>Matooke  </b> <br /> <br /></Link> 
            <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
            <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
           </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img23} alt="" /></div>

            <div className="c-text">
              <strong> Nigeria <br /> <br /></strong>
              <Link to = '/suya'><b>Suya </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img24} alt="" /></div>
           <div className="c-text">
              <strong> Ghana <br /> <br /></strong>
              <Link to = '/kenkey'><b>Kenkey  </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>
          
          <div className="c-image">

            <div className="c-im"><img src={img25} alt="" /></div>
            <div className="c-text">
              <strong> West Africa <br /> <br /></strong>
              <Link to = '/maafe'><b>Maafe </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

            
          <div className="c-image">

            <div className="c-im"><img src={img26} alt="" /></div>
            <div className="c-text">
              <strong> Nigeria <br /> <br /></strong>
              <Link to = '/okra'><b>Okra soup </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img27} alt="" /></div>
            <div className="c-text">
              <strong> North africa <br /> <br /></strong>
              <Link to = '/chak'><b>Chakchouka </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img28} alt="" /></div>
            <div className="c-text">
              <strong> North Africa <br /> <br /></strong>
              <Link to = '/buta'><b>Malva Pudding </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img29} alt="" /></div>
            <div className="c-text">
              <strong> Nigeria <br /> <br /></strong>
              <Link to = '/yam'><b>Yam porridge</b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img30} alt="" /></div>
            <div className="c-text">
              <strong> Nigeria <br /> <br /></strong>
              <Link to = '/spaghetti'><b>Spaghetti </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

          <div className="c-image">

            <div className="c-im"><img src={img31} alt="" /></div>
            <div className="c-text">
              <strong>  Gambia <br /> <br /></strong>
              <Link to = '/cocktail'><b> Groundnut Stew  </b> <br /> <br /></Link> 
              <p><i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-fill" style={{ color: "#ff0" }}></i>
              <i className="bi bi-star-half" style={{ color: "#ff0" }}></i></p>
            </div>
          </div>

        </div>

        
     </div>
        </div>  
    </div>
  )
}

export default Home;
