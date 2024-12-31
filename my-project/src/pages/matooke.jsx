import React from 'react'
import img from '../image/matooke1.jpg'
import img1 from '../image/matooke2.jpg'

const matooke = () => {
  return (
    <div className='frieddrice'>
          <div className="heade-image">
              <img src= {img} alt="friedrice" />
              <div className="fried-text">
                 <p>Matooke Reciepe</p>
              </div>
          </div>
    
          <div className="main-fried-rice">
            <img src= {img1} alt="friedrice" />
          </div>
    
          <div className="friedrice-content">
            <div className="head">
            <h2>Matooke Reciepe</h2>
            <b>The best Matooke you will taste!</b>
            </div>
            
    
            <div className="tutorial">
              <div className="steps">
                <div className="make">
                <ol><strong>01.</strong> <p>Peel the green bananas and wash them.</p></ol>
                <ol><strong>02.</strong> <p>Place the bananas in a large pot and add enough water to cover them.</p></ol>
                <ol><strong>03.</strong> <p>Bring the water to a boil, then reduce the heat to medium-low and simmer for 20-30 minutes, or until the bananas are tender.</p></ol>
                <ol><strong>04.</strong> <p>Drain the water and let the bananas cool.</p></ol>
                <ol><strong>05.</strong> <p>In a separate pan, heat the oil over medium heat.</p></ol>
                <ol><strong>06.</strong> <p>Add the chopped onion and sauté until softened.</p></ol>
                <ol><strong>07.</strong> <p>Add the minced garlic and sauté for another minute.</p></ol>
                <ol><strong>08.</strong> <p>Add the cooked bananas, salt, and pepper to the pan.</p></ol>
                <ol><strong>09.</strong> <p>Stir well and let it simmer for a few minutes.</p></ol>
                <ol><strong>10.</strong> <p>Serve the matooke hot, garnished with chopped fresh herbs (e.g., parsley, cilantro) if desired.</p></ol>


                </div>
                <div className="border"></div>
    
                <div className="ingredients">
                  <h2>Ingedients:</h2>
                  <p>Ingredients:</p>
                <p>- 4-6 green bananas (unripe)</p>
                <p>- 1 onion, chopped</p>
                <p>- 2 cloves of garlic, minced</p>
                <p>- 1 teaspoon of salt</p>
                <p>- 1/2 teaspoon of black pepper</p>
                <p>- 2 tablespoons of vegetable oil</p>
                <p>- Optional: vegetables (e.g., carrots, peas), meat <br /> (e.g., beef, chicken), or beans for added flavor</p>

                </div>
                 
              </div>
            </div>
          </div>
        </div>
  )
}

export default matooke
