import React from 'react'
import img from "../image/jollof1.jpg"
import img1 from '../image/jollof2.jpg'

const jollof = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p>Jollof Rice Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Jollof Rice Reciepe</h2>
      <b>The best Jollof Rice you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
            <ol>
             <strong>01.</strong>
             <p>Heat the oil in a large saucepan over medium heat. Add the onions and cook until they're translucent, about 5 minutes.</p>
            </ol>

            <ol>
            <strong>02.</strong>
            <p>Add the chopped tomatoes, Scotch bonnet pepper (if using), garlic, and ginger to the saucepan. Cook, stirring occasionally, until the tomatoes start to break down, about 5-7 minutes.</p>
            </ol>

            <ol>
            <strong>03.</strong>
            <p>Add the cumin, paprika, salt, and black pepper to the saucepan and stir to combine.</p>
            </ol>

            <ol>
            <strong>04.</strong>
            <p>Add the rice to the saucepan and stir to combine with the tomato mixture. Cook for 2-3 minutes.</p>
            </ol>

            <ol>
            <strong>05.</strong>
            <p>Add the broth, tomato paste, and bay leaves to the saucepan. Stir to combine, then bring the mixture to a boil.</p>
            </ol>

            <ol>
            <strong>06.</strong>
            <p>Reduce the heat to low, cover the saucepan with a tight-fitting lid, and simmer for 20-25 minutes, or until the rice is cooked and the liquid has been absorbed.</p>
            </ol>

            <ol>
            <strong>07.</strong>
            <p>Remove the bay leaves and serve the Jollof Rice hot.</p>
            </ol>
          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>1 cup uncooked long-grain rice</p>

            <p>2 medium onions, chopped</p>

            <p>2 medium tomatoes, chopped</p>

            <p>1 Scotch bonnet pepper, chopped (optional)</p>

            <p>2 cloves garlic, minced</p>

            <p>1 teaspoon grated ginger</p>

            <p>1 tablespoon vegetable oil</p>

            <p>1 teaspoon ground cumin</p>

            <p>1 teaspoon paprika</p>

            <p>Salt and black pepper, to taste</p>

            <p>2 cups chicken or vegetable broth</p>

            <p>2 tablespoons tomato paste</p>

            <p>2 bay leaves</p>


          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default jollof
