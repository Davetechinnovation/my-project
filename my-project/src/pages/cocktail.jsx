import React from 'react'
import '../styles/cocktail.css'
import image from '../image/cocktail (2).png'
import img1 from '../image/cocktaila.jpg'

const cocktail = () => {
  return (
    <div className='cockname'>
       <div className="heade-image">
            <img src= {image} alt="cocktail" />

            <div className="fried-text">
                <p>Cocktail Drink Reciepe</p>
            </div>
       </div>

          
      <div className="main-cocktail">
        <img src= {img1} alt="cocktail" />
      </div>
         
       <div className="cocktail-content">
            <div className="cock">
            <h2>Cocktail Drink Reciepe</h2>
            <b>The best Cocktail you will taste!</b>
            </div>
            

            <div className="cock-tutorial">
                <div className="cock-steps">
                    <div className="cock-make">
                        <ol><strong>01.</strong> <p>Fill a cocktail shaker with ice then add the rums. Scoop the flesh and seeds from the passion fruit and add to the shaker along with the orange and lemon juices, sugar syrup and grenadine.</p></ol>
                        <ol><strong>02.</strong><p>Shake well until the outside of the cocktail shaker feels icy cold. Fill two hurricane glasses with fresh ice then double strain the drink into the prepared glasses.</p> </ol>
                        <ol><strong>03.</strong><p>Garnish each one with an orange slice skewered onto a cocktail stick and a couple of cocktail cherries.</p></ol>
                    
                    </div>
                    <div className="borderr"></div>

                    <div className="cock-tail-ingredient">
                        <h2>Ingedients:</h2>
                        <p>50ml dark rum</p>
                        <p>50ml white rum</p>
                        <p>1 passion fruit</p>
                        <p>1 orange juiced</p>
                        <p>1 lemon juiced</p>
                        <p>50ml sugar syrup</p>
                        <p>2 tsp grenadine</p>
                        <p>4 cocktail cherries</p>
                        <p>2 orange slices</p>

                    
                    </div>
                     
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default cocktail
