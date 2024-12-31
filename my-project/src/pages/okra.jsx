import React from 'react'
import img from '../image/okra.jpeg'
import img1 from '../image/okra.jpeg'

const okra = () => {
  return (
    <div className='frieddrice'>
          <div className="heade-image">
              <img src= {img} alt="friedrice" />
              <div className="fried-text">
                 <p>Okra soup Reciepe</p>
              </div>
          </div>
    
          <div className="main-fried-rice">
            <img src= {img1} alt="friedrice" />
          </div>
    
          <div className="friedrice-content">
            <div className="head">
            <h2>Okra soup Reciepe</h2>
            <b>The best Okra soup you will taste!</b>
            </div>
            
    
            <div className="tutorial">
              <div className="steps">
                <div className="make">
                <ol><strong>01.</strong> <p>In a large pot, heat oil over medium heat. Add onions, garlic, and ginger. Cook until the onions are translucent.</p></ol>

                <ol><strong>02.</strong> <p>Add the beef or goat meat and cook until it's browned on all sides.</p></ol>

                <ol><strong>03.</strong> <p>Add cumin, coriander, cayenne pepper, salt, and black pepper. Cook for 1-2 minutes, stirring constantly.</p></ol>

                <ol><strong>04.</strong> <p>Add beef broth, water, and bring to a boil. Reduce the heat to low and simmer, covered, for 1 hour, or until the meat is tender.</p></ol>

                <ol><strong>05.</strong> <p>Add chopped okra, tomatoes, Scotch bonnet peppers (if using), and crayfish (if using). Stir well.</p></ol>

                <ol><strong>06.</strong> <p>Continue to simmer, covered, for another 30 minutes, or until the okra has thickened the soup.</p></ol>

                <ol><strong>07.</strong> <p>Taste and adjust the seasoning as needed.</p></ol>

                <ol><strong>08.</strong> <p>Serve the Okra Soup hot, garnished with chopped parsley or cilantro (if desired).</p></ol>    
                </div>
                <div className="border"></div>
    
                <div className="ingredients">
                  <h2>Ingedients:</h2>
                  <p>2 pounds beef or goat meat, cut into bite-sized pieces</p>
                  <p>2 pounds beef or goat meat, cut into bite-sized pieces</p>
                <p>2 medium onions, chopped</p>
                <p>3 cloves garlic, minced</p>
                <p>1 medium ginger, grated</p>
                <p>1 teaspoon ground cumin</p>
                <p>1 teaspoon ground coriander</p>
                <p>1/2 teaspoon ground cayenne pepper</p>
                <p>1/2 teaspoon salt</p>
                <p>1/4 teaspoon black pepper</p>
                <p>2 cups beef broth</p>
                <p>1 cup water</p>
                <p>2 tablespoons vegetable oil</p>
                <p>2 cups okra, chopped</p>
                <p>2 medium tomatoes, chopped</p>
                <p>2 Scotch bonnet peppers, chopped (optional)</p>
                <p>2 tablespoons crayfish (optional)</p>
                <p>Fresh parsley or cilantro, chopped (optional)</p>
    
                 
                </div>
                 
              </div>
            </div>
          </div>
        </div>
  )
}

export default okra
