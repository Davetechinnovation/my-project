import React from 'react'
import img from '../image/buta1.png'
import img1 from '../image/buta2.png'

const buta = () => {
  return (
    <div className='cockname'>
    <div className="heade-image">
         <img src= {img} alt="cocktail" />

         <div className="fried-text">
             <p>Buta Kakuni Braised Pork Drink Reciepe</p>
         </div>
    </div>

       
   <div className="main-cocktail">
     <img src= {img1} alt="cocktail" />
   </div>
      
    <div className="cocktail-content">
         <div className="cock">
         <h2>Buta Kakuni Braised Pork Reciepe</h2>
         <b>The best Buta Kakuni Braised Pork you will taste!</b>
         </div>
         

         <div className="cock-tutorial">
             <div className="cock-steps">
                 <div className="cock-make">
                     <ol><strong>01.</strong> <p>Heat the oil in a wok or large pan and fry the pork pieces for 1-2 minutes per side to sear and char slightly. Do this in batches to avoid crowding the pan.</p></ol>
                     <ol><strong>02.</strong><p>Return all the pork to the pan and pour in all the remaining ingredients for the pork cooking liquid. Bring this to a boil, then reduce the heat to low to gently simmer. At this stage add a sheet of greaseproof paper (cut into a circle) to act as the otoshibuta (drop-lid). I used a pre-cut baking parchment circle which fit perfectly. You could also just put on a tightly fitting lid to the pan.</p> </ol>
                     <ol><strong>03.</strong><p>Remove the otoshibuta and then fish out the pork. Pour the cooking liquid through a sieve and set aside. Discard the ginger and spring onion.</p></ol>
                     <ol><strong>04.</strong><p>Return the pork to the pan and then pour in all the simmer sauce ingredients. Bring this to a boil then reduce the heat to medium/low and simmer gently for around 25 minutes until the sauce is thick and sticky. Discard the slice of ginger before serving. That's it!</p> </ol>
                     <ol><strong>05.</strong><p>Serve the Kakuni alongside freshly cooked rice garnished with a little sesame seed and thinly sliced spring onions.</p></ol>
                 </div>
                 <div className="borderr"></div>

                 <div className="cock-tail-ingredient">
                     <h2>Ingedients:</h2>
                     <p>18 oz pork belly (500g)</p>
                     <p>1 tbsp vegetable oil</p>
                     <p>1 spring onion</p>
                     <p>5 slices ginger</p>
                     <p>1 tbsp dashi soup mix</p>
                     <p>2½ cups water</p>
                     <p>½ cup sake</p>
                     <p>½ cup water</p>
                     <p>2 tbsp dark soy sauce</p>
                     <p>1 tbsp light soy sauce</p>
                     <p>2 tbsp mirin</p>
                     <p>2 tbsp sugar</p>
                     <p>1 slice ginger</p>
                     <p>1 spring onion</p>
                     <p>1 tsp toasted sesame seeds</p>
                 
                 </div>
                 
                 
             </div>
         </div>
     </div>
 </div>
  )
}

export default buta
