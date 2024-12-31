import React from 'react'
import img from  '../image/piza.png'
import img1 from '../image/pizzaa.jpg'

const pizza = () => {
  return (
    <div className='frieddrice'>
      <div className="heade-image">
          <img src= {img} alt="friedrice" />
          <div className="fried-text">
             <p>Pizza Reciepe</p>
          </div>
      </div>

      <div className="main-fried-rice">
        <img src= {img1} alt="friedrice" />
      </div>

      <div className="friedrice-content">
        <div className="head">
        <h2>PizzaReciepe</h2>
        <b>The best Pizzayou will taste!</b>
        </div>
        

        <div className="tutorial">
          <div className="steps">
            <div className="make">
              <ol><strong>01.</strong> <p> <b>Prepare the pizza dough:</b> <br />
              Take a dough kneading plate and add all-purpose flour to it. Next, add salt and baking powder in it and sieve the flour once. Then, make a well in the centre and add 2 teaspoon of olive oil to it. On the other hand, take a little warm water and mix the yeast in it along with 1 teaspoon of sugar. Mix well and keep aside for 10-15 minutes. The yeast will rise in the meantime. Once the yeast has risen, add it to the flour knead the dough nicely using some water. Keep this dough aside for 4-6 hours. Then knead the dough once again. Now, the pizza dough is ready.</p></ol>
              <ol><strong>02.</strong><p><b>Prepare the pizza base:</b> <br />
              Preheat the oven at 180 degree Celsius. Now, is the time to make the pizza base when the dough is ready. Dust the space a little using dry flour and take a large amount of the pizza dough. Using a rolling pin, roll this dough into a nice circular base. (Note: Make sure that the circular base is even at all ends.) Once you have made the base, use a fork and prick the base with it so that the base doesn't rise and gets baked nicely. Put it into the preheated oven and bake it 10 minutes. Now, your pizza base is ready.</p> </ol>
              <ol><strong>03.</strong><p><b>Chop all the vegetables for the pizza:</b> <br />
              Now, wash the capsicum and slice it thinly in a bowl. Then, peel the onions and cut thin slices of it as well in another bowl. And finally, cut tomatoes and mushrooms in the same manner. However, make sure that those tomatoes have less juice in them. Once all the veggies are done, Now, grate the processed and mozzarella cheese in separate bowls.</p></ol>
              <ol><strong>04.</strong><p><b>Spread the sauce and veggies on the base:</b> <br />
              Then, take the fresh pizza base and apply tomato ketchup all over. Spread half the processed cheese all over the base and evenly put the veggies all across the base. Once you have put all the veggies, put a thick layer of mozzarella cheese.</p></ol>
              <ol><strong>05.</strong><p><b>Bake the pizza at 250 degree Celsius for 10 minutes:</b> <br />
              Put this pizza base in a baking tray and place it inside the oven. Let the pizza bake 10 minutes at 250 degree Celsius. Once done, take out the baking tray and slice the pizza. Sprinkle oregano and chilli flakes as per your taste and serve hot. (Note: Make sure that the oven is preheated at 250 degree Celsius for 5 minutes at least.)</p></ol>
              
            </div>
            <div className="border"></div>

            <div className="ingredients">
              <h2>Ingedients:</h2>
              <p>2 cup all purpose flour</p>
              <p>100 ml tomato ketchup</p>
              <p>1 tomato</p>
              <p>2 onion</p>
              <p>1 teaspoon chilli flakes</p>
              <p>1 teaspoon baking powder</p>
              <p>1 teaspoon sugar</p>
              <p>2 teaspoon virgin olive oil</p>
              <p>100 gm processed cheese</p>
              <p>4 mushroom</p>
              <p>1/2 capsicum (green pepper)</p>
              <p>1 teaspoon oregano</p>
              <p>1/2 cup mozzarella</p>
              <p>1 tablespoon dry yeast</p>
              <p>water as much as required or wanted</p>

             
            </div>
             
          </div>
        </div>
      </div>
    </div>
  )
}

export default pizza