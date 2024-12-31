import React from 'react'
import img from '../image/chak1.jpg'
import img1 from '../image/chak2.jpg'

const chak = () => {
  return (
     <div className='cockname'>
           <div className="heade-image">
                <img src= {img} alt="cocktail" />
    
                <div className="fried-text">
                    <p>Chakchouka Reciepe</p>
                </div>
           </div>
    
              
          <div className="main-cocktail">
            <img src= {img1} alt="cocktail" />
          </div>
             
           <div className="cocktail-content">
                <div className="cock">
                <h2>Chakchouka Reciepe</h2>
                <b>The best Chakchouka you will taste!</b>
                </div>
                
    
                <div className="cock-tutorial">
                    <div className="cock-steps">
                        <div className="cock-make">
                        <ol><strong>01.</strong> <p>Heat oil in a large cast-iron skillet or saucepan over medium heat.</p></ol>

                        <ol><strong>02.</strong> <p>Add onions and cook, stirring occasionally, until they're softened and lightly browned (about 8-10 minutes).</p></ol>

                        <ol><strong>03.</strong> <p>Add bell peppers and cook, stirring occasionally, until they're tender (about 5-7 minutes).</p></ol>

                        <ol><strong>04.</strong> <p>Add garlic, cumin, smoked paprika (if using), salt, and black pepper. Cook for 1 minute, stirring constantly.</p></ol>

                        <ol><strong>05.</strong> <p>Add chopped tomatoes and stir well. Bring the mixture to a simmer.</p></ol>

                        <ol><strong>06.</strong> <p>Using the back of a spoon, create 2-3 wells in the tomato mixture. Crack an egg into each well.</p></ol>

                        <ol><strong>07.</strong> <p>Cover the skillet and cook until the whites are set and the yolks are cooked to your desired doneness.</p></ol>

                        <ol><strong>08.</strong> <p>Serve the Chakchouka hot, garnished with chopped parsley or cilantro (if desired).</p></ol>                        
                        </div>
                        <div className="borderr"></div>
    
                        <div className="cock-tail-ingredient">
                            <h2>Ingedients:</h2>
                            <p>2 large onions, chopped</p>
                            <p>2 large bell peppers (any color), chopped</p>
                            <p>3-4 garlic cloves, minced</p>
                            <p>1 teaspoon ground cumin</p>
                            <p>1 teaspoon smoked paprika (optional)</p>
                            <p>1/2 teaspoon salt</p>
                            <p>1/4 teaspoon black pepper</p>
                            <p>2 tablespoons olive oil</p>
                            <p>2 large tomatoes, chopped (canned or fresh)</p>
                            <p>2-3 eggs</p>
                            <p>Fresh parsley or cilantro, chopped (optional)</p>

                        
                        </div>
                         
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default chak
