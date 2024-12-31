import React from 'react'
import img from '../image/injera1.jpg'
import img1 from '../image/injera2.jpg'

const injera = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p>Injera (Ethiopia) Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Injera (Ethiopia) Reciepe</h2>
      <b>The best Injera (Ethiopia) you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
            <ol>
            <strong>01.</strong>
            <p>In a large mixing bowl, combine teff flour, all-purpose flour, yeast, and salt.</p>
            </ol>

            <ol>
            <strong>02.</strong>
            <p>Gradually add water to the dry ingredients and mix until a smooth, thick batter forms.</p>
            </ol>

            <ol>
            <strong>03.</strong>
            <p>Cover the bowl with a clean cloth and let the mixture ferment in a warm place for 24-48 hours. The mixture should be frothy and bubbly.</p>
            </ol>

            <ol>
            <strong>04.</strong>
            <p>Preheat a non-stick skillet or injera pan over medium heat.</p>
            </ol>

            <ol>
            <strong>05.</strong>
            <p>Stir the batter well and pour about 1/2 cup of the batter onto the preheated skillet.</p>
            </ol>

            <ol>
            <strong>06.</strong>
            <p>Tilt the skillet to evenly distribute the batter and form a circular shape.</p>
            </ol>

            <ol>
            <strong>07.</strong>
            <p>Cook the injera for about 1-2 minutes, until the edges start to curl and the surface is dry.</p>
            </ol>

            <ol>
            <strong>08.</strong>
            <p>Loosen the injera with a spatula and flip it over. Cook for another minute.</p>
            </ol>

            <ol>
            <strong>09.</strong>
            <p>Repeat the process until all the batter is used up.</p>
            </ol>

            <ol>
            <strong>10.</strong>
            <p>Serve the injera warm or at room temperature with your favorite Ethiopian dishes, such as wats or stews.</p>
            </ol>
          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            Here are all the ingredients wrapped in p tags:

            <p>2 cups teff flour</p>

            <p>2 cups all-purpose flour</p>

            <p>1/2 teaspoon active dry yeast</p>

            <p>1/2 teaspoon salt</p>

            <p>3 cups water</p>

            <p>Teff flour</p>

            <p>All-purpose flour</p>

            <p>Active dry yeast</p>

            <p>Salt</p>

            <p>Water</p>

            <p>Optional ingredients:</p>

            <p>Dried catfish</p>

            <p>Spices</p>

            <p>Salt to taste</p>

            <p>Cameroon pepper to taste</p>

            <p>Stock cubes</p>

            <p>Iru</p>

            <p>Crayfish</p>

           
          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default injera
