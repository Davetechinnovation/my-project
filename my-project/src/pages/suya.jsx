import React from 'react'
import img from '../image/suya1.jpg'
import img1 from '../image/suya2.jpg' 

const suya = () => {
  return (
     <div className='cockname'>
           <div className="heade-image">
                <img src= {img} alt="cocktail" />
    
                <div className="fried-text">
                    <p>Suya Reciepe</p>
                </div>
           </div>
    
              
          <div className="main-cocktail">
            <img src= {img1} alt="cocktail" />
          </div>
             
           <div className="cocktail-content">
                <div className="cock">
                <h2>Suya Reciepe</h2>
                <b>The best Suya you will taste!</b>
                </div>
                
    
                <div className="cock-tutorial">
                    <div className="cock-steps">
                        <div className="cock-make">
                        <ol><strong>01.</strong> <p>In a large bowl, whisk together peanut sauce, vegetable oil, garlic, ginger paste, cumin, paprika, salt, and black pepper.</p></ol>
                        <ol><strong>02.</strong> <p>Add the sliced meat to the marinade and mix well to coat. Cover the bowl with plastic wrap and refrigerate for at least 2 hours or overnight.</p></ol>
                        <ol><strong>03.</strong> <p>Preheat a grill or grill pan over medium-high heat. Thread 3-4 pieces of marinated meat onto each bamboo skewer.</p></ol>
                        <ol><strong>04.</strong> <p>Brush the grill or grill pan with oil to prevent sticking. Grill the suya for 5-7 minutes per side, or until cooked through.</p></ol>
                        <ol><strong>05.</strong> <p>Once cooked, sprinkle yaji spice (if using) over the suya and serve immediately.</p></ol>
                                                
                        </div>
                        <div className="borderr"></div>
    
                        <div className="cock-tail-ingredient">
                            <h2>Ingedients:</h2>
                            <p>- 500g thinly sliced pieces of beef, chicken, or goat meat</p>
                            <p>- 1/2 cup peanut sauce <br />(or substitute with a mixture of peanut butter and soy sauce)</p>
                            <p>- 1/4 cup vegetable oil</p>
                            <p>- 2 cloves garlic, minced</p>
                            <p>- 1 teaspoon ginger paste</p>
                            <p>- 1 teaspoon ground cumin</p>
                            <p>- 1 teaspoon paprika</p>
                            <p>- Salt and black pepper to taste</p>
                            <p>- 20-25 bamboo skewers, soaked in water for 30 minutes</p>
                            <p>- Yaji spice (a Nigerian spice blend, optional)</p>
                        </div>
                         
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default suya
