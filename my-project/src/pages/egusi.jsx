import React from 'react'
import img from '../image/egusi1.jpeg'
import img1 from '../image/egusi2.jpeg'

const egusi = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p>Egusi soup Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Egusi soupReciepe</h2>
      <b>The best Egusi soup you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
          
            <ol>
            <strong>01.</strong>
            <p>In a pot, cook the assorted meat with 1 scotch bonnet, 1 onion, seasoning cubes, Cameroon pepper, and salt for 30 minutes.</p>
            </ol>

            <ol>
            <strong>02.</strong>
            <p>Separate meat from stock. Lay the meat on a baking sheet and bake in the oven at 325°F for 10-15 minutes.</p>
            </ol>

            <ol>
            <strong>03.</strong>
            <p>Prepare pepper base by blending all the peppers into a rough paste and boiling it for 10-15 minutes or until all the water evaporates.</p>
            </ol>

            <ol>
            <strong>04.</strong>
            <p>Make egusi paste by mixing melon seeds and chopped onions. Make sure paste is slightly thick.</p>
            </ol>

            <ol>
            <strong>05.</strong>
            <p>In a pot, heat the palm oil and add the egusi paste. Stir fry for about 5 minutes until the egusi is fried and clumpy.</p>
            </ol>

            <ol>
            <strong>06.</strong>
            <p>Add pepper paste, cooked meat, Cameroon pepper, crayfish, and some water to the pot. Stir well and let it simmer for about 10 minutes.</p>
            </ol>

            <ol>
            <strong>07.</strong>
            <p>Then add meat stock and season with more salt and seasoning cubes if needed. Add the chopped vegetables. Cook for an additional 3 minutes.</p>
            </ol>

            <ol>
            <strong>08.</strong>
            <p>Serve the egusi soup with pounded yam, or any other swallow of your choice.</p>
            </ol>
          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>2 cups Ground melon seeds</p>

            <p>1 lbs Assorted meat oven roasted or fried</p>

            <p>4 cups stock</p>

            <p>3 cups chopped spinach</p>

            <p>2 medium sized onions chopped</p>

            <p>2 long bell peppers</p>

            <p>2 chilli peppers</p>

            <p>4 scotch bonnets</p>

            <p>Dried catfish optional</p>
      
            <p>Salt to taste</p>

            <p>Cameroon pepper to taste</p>

            <p>2 stock cubes</p>

            <p>1 tsp iru</p>

            <p>2 tbsp crayfish</p>

           
          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default egusi
