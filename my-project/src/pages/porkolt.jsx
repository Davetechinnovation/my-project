import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import img from '../image/porkolt1.jpg'
import img1 from '../image/porkolt2.jpg'

const porkolt = () => {
  return (
    <div className='cockname'>
    <div className="heade-image">
         <img src= { img } alt="cocktail" />

         <div className="fried-text">
             <p>Porkolt Reciepe</p>
         </div>
    </div>

       
   <div className="main-cocktail">
     <img src= {img1} alt="cocktail" />
   </div>
      
    <div className="cocktail-content">
         <div className="cock">
         <h2>Porkolt Reciepe</h2>
         <b>The best Porkolt you will taste!</b>
         </div>
         

         <div className="cock-tutorial">
             <div className="cock-steps">
                 <div className="cock-make">
                     <ol><strong>01.</strong> <p>In a heavy pot or Dutch oven fry the bacon until done. Add the onions and cook over medium-high heat until golden. Add the bell peppers and garlic and cook for another two minutes. Add the beef and cook for a minute until some, but not all, of the pink is gone. Stir in the paprika and remove from heat.</p></ol>
                     <ol><strong>02.</strong><p>Add the remaining ingredients. Add just enough water to come up to just over the halfway point of the stew mixture (in other words, not so the water is covering it). Return to heat and bring it to a boil. Cover, reduce the heat to medium-low and simmer for 90 minutes. If the stew isn't thick enough, continue to simmer uncovered for a few more minutes so that some of the liquid evaporates. Add salt to taste.</p> </ol>
                     <ol><strong>03.</strong><p>Serve with Spätzle (in Hungary they are shorter and stubbier, so prepare the dough accordingly or just use whatever method/shape you prefer – the texture and flavor of the dough is the same regardless). Or serve with boiled potatoes or wide egg noodles. A side salad, particularly a cucumber salad, is traditional. If desired, serve with a dollop of sour cream.</p></ol>
                 
                 </div>
                 <div className="borderr"></div>

                 <div className="cock-tail-ingredient">
                     <h2>Ingedients:</h2>
                     <p>4 slices thick-cut bacon</p>
                     <p>1 large yellow onion</p>
                     <p>1 green bell pepper</p>
                     <p>2 cloves garlic </p>
                     <p>1 large tomato</p>
                     <p>1 1/2 pounds stewing beef </p>
                     <p>4 tablespoons quality <br />imported sweet, <br />Hungarian paprika</p>
                     <p>1 1/2 teaspoons salt</p>
                     <p>1/4 teaspoon freshly <br />ground black pepper</p>
                     <p>1/4-1/2 teaspoon <br />caraway seeds ,<br /> coarsely crushed</p>
                     <p>1 bay leaf</p>
                     <p>Water</p>

                 
                 </div>
                 
                 
             </div>
         </div>
     </div>
 </div>
  )
}

export default porkolt
