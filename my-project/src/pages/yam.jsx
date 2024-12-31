import React from 'react'
import img from '../image/yam1.png'
import img1 from '../image/yam2.png'

const yam = () => {
  return (
    <div className='frieddrice'>
          <div className="heade-image">
              <img src= {img} alt="friedrice" />
              <div className="fried-text">
                 <p>Yam-prodige Reciepe</p>
              </div>
          </div>
    
          <div className="main-fried-rice">
            <img src= {img1} alt="friedrice" />
          </div>
    
          <div className="friedrice-content">
            <div className="head">
            <h2>Yam-porridge Reciepe</h2>
            <b>The best Yam-porridge you will taste!</b>
            </div>
            
    
            <div className="tutorial">
              <div className="steps">
                <div className="make">
                <ol>
                <strong>01.</strong>
                <p>Place the chopped yams in a large pot and add enough water to cover them.</p>
                </ol>

                <ol>
                <strong>02.</strong>
                <p>Bring the water to a boil over high heat, then reduce the heat to medium-low and simmer for 15-20 minutes, or until the yams are tender.</p>
                </ol>

                <ol>
                <strong>03.</strong>
                <p>Drain the yams and return them to the pot. Add the vegetable oil, onion, garlic, ginger, Scotch bonnet pepper (if using), salt, and black pepper.</p>
                </ol>

                <ol>
                <strong>04.</strong>
                <p>Use a wooden spoon or masher to mash the yams and mix them with the other ingredients.</p>
                </ol>

                <ol>
                <strong>05.</strong>
                <p>Gradually add the water to the pot, stirring constantly to achieve a smooth consistency.</p>
                </ol>

                <ol>
                <strong>06.</strong>
                <p>Bring the mixture to a simmer over medium heat and cook for 10-15 minutes, stirring occasionally, until the porridge has thickened to your liking.</p>
                </ol>

                <ol>
                <strong>07.</strong>
                <p>Taste and adjust the seasoning as needed.</p>
                </ol>

                <ol>
                <strong>08.</strong>
                <p>Serve the yam porridge hot, garnished with fresh parsley or spinach leaves (if desired).</p>
                </ol>
                
    
                </div>
                <div className="border"></div>
    
                <div className="ingredients">
                  <h2>Ingedients:</h2>
                  <p>2-3 large yams, peeled and chopped into medium-sized pieces</p>
                    <p>2 tablespoons vegetable oil</p>
                    <p>1 large onion, chopped</p>
                    <p>2 cloves garlic, minced</p>
                    <p>1 teaspoon grated ginger</p>
                    <p>1 Scotch bonnet pepper (optional), chopped</p>
                    <p>1 teaspoon salt</p>
                    <p>1/2 teaspoon black pepper</p>
                    <p>2 cups water</p>
                    <p>2 tablespoons tomato puree (optional)</p>
                    <p>Fresh parsley or spinach leaves for garnish (optional)</p>

    
                </div>
                 
              </div>
            </div>
          </div>
        </div>
  )
}

export default yam
