import React from 'react'
import img from '../image/kenkey1.jpg'
import img1 from '../image/kenkey2.jpg'

const kenkey = () => {
  return (
    <div className='frieddrice'>
          <div className="heade-image">
              <img src= {img} alt="friedrice" />
              <div className="fried-text">
                 <p>Kenkey Reciepe</p>
              </div>
          </div>
    
          <div className="main-fried-rice">
            <img src= {img1} alt="friedrice" />
          </div>
    
          <div className="friedrice-content">
            <div className="head">
            <h2>Kenkey Rice Reciepe</h2>
            <b>The best Kenkey Rice you will taste!</b>
            </div>
            
    
            <div className="tutorial">
              <div className="steps">
                <div className="make">
                <ol>
                <strong>01.</strong>
                <p>Mix the corn dough, water, salt, and sugar in a large bowl until you get a smooth, thick paste.</p>
                </ol>

                <ol>
                <strong>02.</strong>
                <p>Knead the dough for about 10 minutes until it becomes pliable and easy to shape.</p>
                </ol>

                <ol>
                <strong>03.</strong>
                <p>Cover the dough with a damp cloth and let it ferment for 2-3 days. The fermentation process will give the kenkey its characteristic sour taste.</p>
                </ol>

                <ol>
                <strong>04.</strong>
                <p>After fermentation, divide the dough into small balls, about the size of a golf ball.</p>
                </ol>

                <ol>
                <strong>05.</strong>
                <p>Flatten each ball into a small disk shape.</p>
                </ol>

                <ol>
                <strong>06.</strong>
                <p>Wrap each disk in a banana leaf or aluminum foil.</p>
                </ol>

                <ol>
                <strong>07.</strong>
                <p>Steam the kenkey for about 30-40 minutes, or until it's cooked through and has a firm texture.</p>
                </ol>

                <ol>
                <strong>08.</strong>
                <p>Serve the kenkey with a sauce or stew of your choice. Traditionally, kenkey is served with a spicy pepper sauce or a fish stew.</p>
                </ol>



    
                </div>
                <div className="border"></div>
    
                <div className="ingredients">
                  <h2>Ingedients:</h2>
                  <p>2 cups of corn dough (or cornmeal)</p>
                  <p>1/2 cup of water</p>
                  <p>1/4 teaspoon of salt</p>
                  <p>1/4 teaspoon of sugar</p>
                  <p>1 tablespoon of vegetable oil</p>
                  <p>1 small onion, finely chopped</p>
                  <p>2 cloves of garlic, minced</p>
                  <p>1 teaspoon of grated ginger</p>
                  <p>1/2 teaspoon of ground cumin</p>
                  <p>1/4 teaspoon of cayenne pepper (optional)</p>
                  <p>1/2 teaspoon of black pepper</p>
                  <p>1/4 teaspoon of paprika</p>
                  <p>2 tablespoons of tomato paste</p>
                  <p>2 tablespoons of chopped fresh parsley</p>
                  <p>2 tablespoons of chopped fresh cilantro</p>
                  <p>1 tablespoon of lemon juice</p>
                  <p>1/4 teaspoon of ground turmeric</p>
                      
                 
                </div>
                 
              </div>
            </div>
          </div>
        </div>
  )
}

export default kenkey
