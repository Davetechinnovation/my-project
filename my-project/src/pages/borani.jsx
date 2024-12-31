import React from 'react'
import img from '../image/borani1.png'
import img1 from '../image/borani2.png'

const brando = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img1} alt="friedrice" />
        <div className="fried-text">
          <p>Borani Kadoo sqash Salad Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Borani Kadoo sqash Salad Reciepe</h2>
      <b>The best Borani Kadoo sqash Salad you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
            <ol><strong>01.</strong> <p>Heat the olive oil in a deep frying pan over a moderate heat. Fry the squash/zucchini slices for 5-6 minutes until browned both sides. Remove to a bowl with a slotted spoon.</p></ol>
            <ol><strong>02.</strong><p>Add the turmeric, paprika, and garlic to the pan and fry for 10 seconds, then add the tomatoes. Stir well to combine. Add ½ cup water, bring to a simmer and cook gently for 10 minutes (uncovered) until soft and reduced.</p> </ol>
            <ol><strong>03.</strong><p>Return the squash/zucchini to the pan and season with salt & pepper. Cook for another 5 minutes, uncovered. Mash a few of the squash slices with a fork. Remove from the heat and cool to room temperature.</p></ol>
            <ol><strong>04.</strong><p>Whisk together the yoghurt, garlic, and salt. Add 1-2 tbsp water to thin out the sauce a little.</p></ol>
            <ol><strong>05.</strong><p>Arrange the cooled zucchini/tomato mix on a serving platter and drizzle over all the yoghurt sauce. Generously sprinkle over the dried mint/dill and a little lemon juice along with a healthy glug of extra virgin olive oil.</p></ol>
            <ol><strong>06.</strong><p>Serve with flatbreads to dip and scoop up the salad.</p></ol>
          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>4 tbsp olive oil</p>
            <p>4 medium green squash</p>
            <p>1 tsp turmeric powder</p>
            <p>1 tsp paprika</p>
            <p>3 tomatoes (peeled & chopped)</p>
            <p>2 garlic cloves</p>
            <p>salt & pepper</p>
            <p>salt & pepper</p>
            <p>1 garlic clove (minced)</p>
            <p>¼ tsp salt</p>
            <p>2 tsp dried mint (or dried dill)</p>
            <p>½ lemon (juice)</p>
            <p>Extra virgin olive oil (for drizzling) (optional)</p>
         

          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default brando
