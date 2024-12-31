import React from 'react'
import img from "../image/maafe1.jpg"
import img1 from "../image/maafe2.jpg"

const maafe = () => {
  return (
    <div className='frieddrice'>
          <div className="heade-image">
              <img src= {img} alt="friedrice" />
              <div className="fried-text">
                 <p>Maafe Reciepe</p>
              </div>
          </div>
    
          <div className="main-fried-rice">
            <img src= {img1} alt="friedrice" />
          </div>
    
          <div className="friedrice-content">
            <div className="head">
            <h2>Maafe Reciepe</h2>
            <b>The best Maafe you will taste!</b>
            </div>
            
    
            <div className="tutorial">
              <div className="steps">
                <div className="make">
                <ol><strong>01.</strong> <p>Heat oil in a large Dutch oven or pot over medium heat.</p></ol>

                <ol><strong>02.</strong> <p>Add onions and cook until they're translucent and starting to brown (about 8 minutes).</p></ol>

                <ol><strong>03.</strong> <p>Add garlic, ginger, cumin, coriander, cinnamon, cayenne pepper, salt, and black pepper. Cook for 1-2 minutes, stirring constantly.</p></ol>

                <ol><strong>04.</strong> <p>Add the beef or lamb and cook until it's browned on all sides (about 5-7 minutes).</p></ol>

                <ol><strong>05.</strong> <p>Stir in the peanut paste (or peanut butter) and cook for 1-2 minutes.</p></ol>

                <ol><strong>06.</strong> <p>Add the beef broth, water, potatoes, carrots, and tomatoes. Bring the mixture to a boil, then reduce the heat to low and simmer, covered, for 1 1/2 to 2 hours, or until the meat is tender.</p></ol>

                <ol><strong>07.</strong> <p>Serve the Maafe hot, garnished with chopped parsley or cilantro, if desired.</p></ol>

                </div>
                <div className="border"></div>
    
                <div className="ingredients">
                  <h2>Ingedients:</h2>
                  <p>2 pounds beef or lamb, cut into bite-sized pieces</p>
                <p>2 medium onions, chopped</p>
                <p>3 cloves garlic, minced</p>
                <p>1 medium ginger, grated</p>
                <p>1 tablespoon ground cumin</p>
                <p>1 teaspoon ground coriander</p>
                <p>1/2 teaspoon ground cinnamon</p>
                <p>1/2 teaspoon ground cayenne pepper</p>
                <p>1/2 teaspoon salt</p>
                <p>1/4 teaspoon black pepper</p>
                <p>2 tablespoons peanut paste (or peanut butter)</p>
                <p>2 tablespoons vegetable oil</p>
                <p>2 cups beef broth</p>
                <p>1 cup water</p>
                <p>2 medium potatoes, peeled and cubed</p>
                <p>2 medium carrots, peeled and sliced</p>
                <p>2 medium tomatoes, chopped</p>
                <p>Fresh parsley or cilantro, chopped (optional)</p>
    
                 
                </div>
                 
              </div>
            </div>
          </div>
        </div>
  )
}

export default maafe
