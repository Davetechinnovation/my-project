import React from 'react'
import img from '../image/bobotie1.jpg'
import img1 from '../image/bobotie2.jpg'

const bobotie = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p>Bobotie Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Bobotie Reciepe</h2>
      <b>The best Bobotie you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
            <ol>
            <strong>01.</strong>
            Preheat your oven to 350°F (180°C).
            </ol>

            <ol>
            <strong>02.</strong>
            In a large pan, heat 2 tablespoons of oil over medium heat. Add the onion and cook until softened, about 5 minutes.
            </ol>

            <ol>
            <strong>03.</strong>
            Add the garlic, ginger, curry powder, cumin, turmeric, salt, and pepper to the pan. Cook for 1-2 minutes, stirring constantly.
            </ol>

            <ol>
            <strong>04.</strong>
            Add the ground beef or lamb to the pan, breaking it up with a spoon as it cooks. Cook until the meat is browned, about 5-7 minutes.
            </ol>

            <ol>
            <strong>05.</strong>
            Stir in the dried fruit and chopped cilantro (if using). Cook for an additional 2-3 minutes.
            </ol>

            <ol>
            <strong>06.</strong>
            Transfer the meat mixture to a 9x13-inch baking dish.
            </ol>

            <ol>
            <strong>07.</strong>
            In a separate bowl, whisk together the milk, heavy cream, eggs, salt, flour, and nutmeg.
            </ol>

            <ol>
            <strong>08.</strong>
            Pour the custard mixture over the meat filling in the baking dish.
            </ol>

            <ol>
            <strong>09.</strong>
            Bake the bobotie in the preheated oven for 35-40 minutes, or until the custard is set and the top is golden brown.
            </ol>

            <ol>
            <strong>10.</strong>
            Serve the bobotie hot, garnished with chopped fresh cilantro or scallions (if desired).
            </ol>

          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>1 pound ground beef or lamb</p>

            <p>1 medium onion, finely chopped</p>

            <p>2 cloves garlic, minced</p>

            <p>1 tablespoon grated fresh ginger</p>

            <p>1 teaspoon curry powder</p>

            <p>1 teaspoon ground cumin</p>

            <p>1/2 teaspoon turmeric</p>

            <p>1/2 teaspoon salt</p>

            <p>1/4 teaspoon black pepper</p>

            <p>1/4 cup dried fruit (cranberries, raisins, or apricots)</p>

            <p>1/4 cup chopped fresh cilantro (optional)</p>

            <p>1 cup milk</p>

            <p>1/2 cup heavy cream</p>

            <p>2 large eggs</p>

            <p>1 teaspoon salt</p>

            <p>1 tablespoon all-purpose flour</p>

            <p>1/4 teaspoon ground nutmeg</p>

            
          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default bobotie
