import React from 'react'
import img from '../image/tagine1.jpg'
import img1 from '../image/tagine2.jpg'

const tagine = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p>Tagine Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Chicken Tagine  Reciepe</h2>
      <b>The best Tagine you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
          <ol>
            <strong>01.</strong>
            <p>Heat the oil in the bottom of a clay or ceramic tagine or a Dutch oven over medium heat.</p>
            </ol>

            <ol>
            <strong>02.</strong>
            <p>Add the onions and cook, stirring occasionally, until they are softened and lightly browned, about 8 minutes.</p>
            </ol>

            <ol>
            <strong>03.</strong>
            <p>Add the garlic, ginger, cumin, paprika, cinnamon, turmeric, and cayenne pepper to the pot. Cook, stirring constantly, for 1-2 minutes.</p>
            </ol>

            <ol>
            <strong>04.</strong>
            <p>Add the chicken to the pot and cook, stirring occasionally, until it is browned on all sides, about 5-7 minutes.</p>
            </ol>

            <ol>
            <strong>05.</strong>
            <p>Add the chicken broth, olives, parsley, cilantro, lemon juice, and preserved lemon to the pot. Stir to combine, then bring the mixture to a boil.</p>
            </ol>

            <ol>
            <strong>06.</strong>
            <p>Cover the pot and transfer it to the oven. Braise the tagine, stirring occasionally, until the chicken is cooked through and the meat is tender, about 30-40 minutes.</p>
            </ol>

            <ol>
            <strong>07.</strong>
            <p>Season the tagine with salt and black pepper to taste. Serve the chicken and sauce over couscous.</p>
            </ol>


          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>1 1/2 pounds boneless, skinless chicken thighs, cut into 2-inch pieces</p>

            <p>2 medium onions, chopped</p>

            <p>2 cloves garlic, minced</p>

            <p>2 tablespoons grated fresh ginger</p>

            <p>1 teaspoon ground cumin</p>

            <p>1 teaspoon smoked paprika (optional)</p>

            <p>1/2 teaspoon ground cinnamon</p>

            <p>1/2 teaspoon ground turmeric</p>

            <p>1/4 teaspoon cayenne pepper</p>

            <p>Salt and black pepper, to taste</p>

            <p>2 tablespoons olive oil</p>

            <p>2 cups chicken broth</p>

            <p>1 cup pitted green olives, such as Cerignola</p>

            <p>1/4 cup chopped fresh parsley</p>

            <p>1/4 cup chopped fresh cilantro</p>

            <p>2 tablespoons freshly squeezed lemon juice</p>

            <p>1 preserved lemon, chopped (see Note)</p>



            
          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default tagine
