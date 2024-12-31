import React from 'react'
import img from '../image/pad thai1.jpg'
import img1 from '../image/pad thai2.jpg'

const pad = () => {
  return (
   <div className='frieddrice'>
         <div className="heade-image">
             <img src= {img} alt="friedrice" />
             <div className="fried-text">
                <p>Fried-Rice Reciepe</p>
             </div>
         </div>
   
         <div className="main-fried-rice">
           <img src= {img1} alt="friedrice" />
         </div>
   
         <div className="friedrice-content">
           <div className="head">
           <h2>Chicken Fried Rice Reciepe</h2>
           <b>The best fried rice you will taste!</b>
           </div>
           
   
           <div className="tutorial">
             <div className="steps">
               <div className="make">
               <ol>
                <strong>01.</strong>
                <p>Cook the rice noodles according to package instructions. Drain and set aside.</p>
                </ol>

                <ol>
                <strong>02.</strong>
                <p>Heat the oil in a large wok or frying pan over medium-high heat.</p>
                </ol>

                <ol>
                <strong>03.</strong>
                <p>Add the onion and garlic and stir-fry until the onion is translucent.</p>
                </ol>

                <ol>
                <strong>04.</strong>
                <p>Add the mixed vegetables and cooked shrimp (or protein of your choice) and stir-fry for 2-3 minutes.</p>
                </ol>

                <ol>
                <strong>05.</strong>
                <p>In a small bowl, whisk together the tamarind paste, palm sugar, fish sauce, soy sauce, rice vinegar, ginger, and white pepper.</p>
                </ol>

                <ol>
                <strong>06.</strong>
                <p>Pour the sauce into the wok or frying pan and stir-fry for 1-2 minutes, until the sauce has thickened.</p>
                </ol>

                <ol>
                <strong>07.</strong>
                <p>Add the cooked noodles to the wok or frying pan and stir-fry for 1-2 minutes, until the noodles are well coated with the sauce.</p>
                </ol>

                <ol>
                <strong>08.</strong>
                <p>Season with salt to taste.</p>
                </ol>

                <ol>
                <strong>09.</strong>
                <p>Transfer the Pad Thai to a serving platter or individual plates.</p>
                </ol>

                <ol>
                <strong>10.</strong>
                <p>Sprinkle with chopped peanuts and cilantro.</p>
                </ol>

                <ol>
                <strong>11.</strong>
                <p>Serve with lime wedges on the side.</p>
                </ol>
               </div>
               <div className="border"></div>
   
               <div className="ingredients">
                 <h2>Ingedients:</h2>
                 <p>1 cup rice noodles</p>
                  <p>2 tablespoons vegetable oil</p>
                  <p>1 onion, thinly sliced</p>
                  <p>2 cloves garlic, minced</p>
                  <p>1 cup mixed vegetables (bean sprouts, carrots, green onions)</p>
                  <p>1 cup cooked shrimp (or tofu, chicken, or pork)</p>
                  <p>2 tablespoons tamarind paste</p>
                  <p>2 tablespoons palm sugar</p>
                  <p>1 tablespoon fish sauce</p>
                  <p>1 tablespoon soy sauce</p>
                  <p>1 tablespoon rice vinegar</p>
                  <p>1 teaspoon grated ginger</p>
                  <p>1/4 teaspoon ground white pepper</p>
                  <p>Salt, to taste</p>
                  <p>2 tablespoons chopped peanuts</p>
                  <p>2 tablespoons chopped fresh cilantro</p>
                  <p>2 lime wedges</p>

   
                 
               </div>
                
             </div>
           </div>
         </div>
       </div>
  )
}

export default pad
