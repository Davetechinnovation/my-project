import React from 'react'
import img from '../image/Lebanon1.png'
import img1 from '../image/Lebanon2.png'

const Lebanon = () => {
  return (
    <div className='cockname'>
       <div className="heade-image">
            <img src= {img} alt="cocktail" />

            <div className="fried-text">
                <p>Baba Ghanoush (Lebanese Eggplant Dip) Reciepe</p>
            </div>
       </div>

          
      <div className="main-cocktail">
        <img src= {img1} alt="cocktail" />
      </div>
         
       <div className="cocktail-content">
            <div className="cock">
            <h2>Baba Ghanoush (Lebanese Eggplant Dip) Reciepe</h2>
            <b>The best Baba Ghanoush (Lebanese Eggplant Dip) you will taste!</b>
            </div>
            

            <div className="cock-tutorial">
                <div className="cock-steps">
                    <div className="cock-make">
                        <ol><strong>01.</strong> <p>Preheat oven to 400°F. Poke the eggplants in several places with the tines of a fork. Cut the eggplants in half lengthwise and brush the cut sides lightly with olive oil (about 1 tablespoon). Place on a baking sheet, cut side down, and roast until very tender, about 35-40 minutes. Remove from oven and allow to cool for 15 minutes.</p></ol>
                        <ol><strong>02.</strong><p>Scoop the eggplant flesh into a large bowl and mash well with a fork.</p> </ol>
                        <ol><strong>03.</strong><p>Combine the eggplant, minced garlic, remaining olive oil (about 2 tablespoons), tahini, cumin, 2 tablespoons of the lemon juice, the salt, and a pinch of cayenne. Mash well. You want the mixture to be somewhat smooth but still retaining some of the eggplant's texture.</p></ol>
                        <ol><strong>04.</strong><p>Allow the baba ganoush to cool to room temperature, then season to taste with additional lemon juice, salt, and cayenne. If you want, swirl a little olive oil on the top. Sprinkle with fresh chopped parsley. Serve with pita bread, crackers, toast, sliced baguette, celery, or cucumber slices.</p></ol>
                    </div>
                    <div className="borderr"></div>

                    <div className="cock-tail-ingredient">
                        <h2>Ingedients:</h2>
                        <p>1 to 2 globe eggplants</p>
                        <p>3 tablespoons extra virgin olive oil</p>
                        <p>2 to 3 tablespoons roasted tahini</p>
                        <p>1 to 2 garlic cloves, brfinely chopped</p>
                        <p>1/2 teaspoon ground cumin</p>
                        <p>Juice of 1 lemon (about 2 1/2 tablespoons)</p>
                        <p>Salt and cayenne pepper to taste</p>
                        <p>1 tablespoon chopped parsley</p>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lebanon
