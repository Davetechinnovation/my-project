import React from 'react'
import img1 from '../image/shirai1.jpeg.jpg'
import img2  from '../image/shirai2.jpeg.jpg'

const shirazi = () => {
  return (
    <div className='cockname'>
    <div className="heade-image">
         <img src= {img1} alt="cocktail" />

         <div className="fried-text">
             <p>Shirazi Salad Reciepe</p>
         </div>
    </div>

       
   <div className="main-cocktail">
     <img src= {img2} alt="cocktail" />
   </div>
      
    <div className="cocktail-content">
         <div className="cock">
         <h2>Shirazi Salad Reciepe</h2>
         <b>The best Shirazi Salad you will taste!</b>
         </div>
         

         <div className="cock-tutorial">
             <div className="cock-steps">
                 <div className="cock-make">
                     <ol><strong>01.</strong> <p>Place diced tomatoes for a few minutes in a colander to release excess liquid. (I don't remove the seeds, so this step helps.)</p></ol>
                     <ol><strong>02.</strong><p>In a large bowl, place the diced tomatoes, cucumbers, onions, and bell peppers.</p> </ol>
                     <ol><strong>03.</strong><p>To flavor, add fresh herbs, dried mint, and a generous pinch of salt and pepper. Add sumac (I started with 1 tsp). Finally, add lime juice, and a generous drizzle of extra virgin olive oil. Toss to combine.</p></ol>
                     <ol><strong>04.</strong><p>If you  have the time, cover and chill this salad in the fridge for 30 minutes to 1 hour for best taste.</p></ol>
                 
                 </div>
                 <div className="borderr"></div>

                 <div className="cock-tail-ingredient">
                     <h2>Ingedients:</h2>
                     <p>3 Roma tomatoes, small diced</p>
                     <p>1 English cucumber or 4 small <br /> Persian cucumbers, small diced</p>
                     <p>1/4 to 1/2 cup finely chopped onions, <br /> red or yellow onions will work here</p>
                     <p>1/2 green bell pepper, optional,<br /> chopped into small pieces</p>
                     <p>2 to 3 tbsp EACH chopped fresh <br /> parsley, cilantro, and dill</p>
                     <p>1 tbsp dried mint or 1/2 cup <br /> chopped fresh mint</p>
                     <p>Salt and pepper</p>
                     <p>Sumac to taste (optional)</p>
                     <p>Juice of 2 large limes (about 4 tbsp)</p>
                     <p>3 tbsp extra virgin olive oil  I used <br /> Early Harvest Greek extra virgin olive oil</p>

                 
                 </div>
                 
             </div>
         </div>
     </div>
 </div>
  )
}

export default shirazi
