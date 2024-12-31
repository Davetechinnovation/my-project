import React from 'react'
import img from '../image/groundnut1.jpg'
import img1 from '../image/groundnut2.jpg'

const groundnut = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p> Groundnut Stew  Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2> Groundnut Stew  Reciepe</h2>
      <b>The best  Groundnut Stew you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
          <ol>
          <strong>01.</strong>
          <p>In a blender or food processor, grind the groundnuts into a smooth paste.</p>
          </ol>

          <ol>
          <strong>02.</strong>
          <p>Heat the oil in a large pot over medium heat. Add the onions and cook until softened, about 5 minutes.</p>
          </ol>

          <ol>
          <strong>03.</strong>
          <p>Add the garlic, ginger, and Scotch bonnet pepper (if using) to the pot. Cook for 1 minute, until fragrant.</p>
          </ol>

          <ol>
          <strong>04.</strong>
          <p>Add the beef or chicken to the pot and cook until browned, about 5 minutes.</p>
          </ol>

          <ol>
          <strong>05.</strong>
          <p>Add the diced tomatoes, beef broth, cumin, coriander, salt, and black pepper to the pot. Stir well to combine.</p>
          </ol>

          <ol>
          <strong>06.</strong>
          <p>Bring the stew to a boil, then reduce the heat to low and simmer, covered, for 1 1/2 hours, or until the meat is tender.</p>
          </ol>

          <ol>
          <strong>07.</strong>
          <p>Stir in the groundnut paste and continue to simmer, uncovered, for an additional 30 minutes, or until the stew has thickened.</p>
          </ol>

          <ol>
          <strong>08.</strong>
          <p>If using potatoes, add them to the pot during the last 30 minutes of cooking.</p>
          </ol>

          <ol>
          <strong>09.</strong>
          <p>Taste and adjust the seasoning as needed.</p>
          </ol>

          <ol>
          <strong>10.</strong>
          <p> Serve the Groundnut Stew hot, garnished with fresh parsley or cilantro (if desired).</p>
          </ol>

          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>1 cup groundnuts (peanuts)</p>
            <p>2 medium onions, chopped</p>
            <p>3 cloves garlic, minced</p>
            <p>1 teaspoon grated ginger</p>
            <p>1 Scotch bonnet pepper, chopped (optional)</p>
            <p>1 pound beef or chicken, cut into bite-sized pieces</p>
            <p>1 can (14 oz) diced tomatoes</p>
            <p>2 cups beef broth</p>
            <p>1 teaspoon ground cumin</p>
            <p>1 teaspoon ground coriander</p>
            <p>Salt and black pepper, to taste</p>
            <p>2 tablespoons vegetable oil</p>
            <p>2 potatoes, peeled and chopped (optional)</p>
            <p>Fresh parsley or cilantro, for garnish (optional)</p>

          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default groundnut
