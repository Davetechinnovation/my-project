import React from 'react'
import '../styles/friedrice.css'
import img from '../image/friedrice.jpg'
import img1 from '../image/friedrice 1.jpg'

const friedrice = () => {
  return (
    <div className='frieddrice'>
      <div className="heade-image">
          <img src= {img} alt="friedrice" />
          <div className="fried-text">
             <p>Fried-Rice Reciepe</p>
          </div>
      </div>

      <div className="main-fried-rice">
        <img src= {img1} alt="friedrice" />
      </div>

      <div className="friedrice-content">
        <div className="head">
        <h2>Chicken Fried Rice Reciepe</h2>
        <b>The best fried rice you will taste!</b>
        </div>
        

        <div className="tutorial">
          <div className="steps">
            <div className="make">
              <ol><strong>01.</strong> <p>Cut the chicken breasts into thin strips.  Place in bowl add a little grapeseed oil, white pepper,  2 teaspoons soy sauce and one teaspoon sesame seed oil.</p></ol>
              <ol><strong>02.</strong><p>spring onions, chili, into small pieces.  The garlic very finely chopped or simply mince it.  Have your peas ready.  Set all veges aside.</p> </ol>
              <ol><strong>03.</strong><p>To a wok or large frying pan on high heat, add 2 tablespoons of grapeseed or vegetable oil.  Once very hot, place your marinated chicken and fry until cooked golden brown on each side then set aside. (Don’t overcook)</p></ol>
              <ol><strong>04.</strong><p>In the same wok or pan on medium heat, add a little more grapeseed oil if required, and crack 2 eggs.  Break up the eggs and cook until barely firm.  Set eggs aside.</p></ol>
              <ol><strong>05.</strong><p>To the same pan or wok on medium heat, add a touch more oil, then fry the chopped shallots and chili until soft.  Add garlic, cook 30 seconds then add the spring onions.  Keep stirring until cooked.</p></ol>
              <ol><strong>06.</strong><p>Add the cooked rice and break it up as you mix over a hot flame.  Add the turmeric powder, soy sauce, oyster sauce, and lime juice.  Mix well</p></ol>
              <ol><strong>07.</strong><p>Once the rice is mixed, add the chicken, peas and cooked eggs.   Mix well, cook 2 to 3 minutes and serve steaming hot.</p></ol>

            </div>
            <div className="border"></div>

            <div className="ingredients">
              <h2>Ingedients:</h2>
              <p>1 x 12oz – 340g large chicken breast (or 2 small ones)</p>
              <p>2 shallots (peeled)</p>
              <p>5 - 6 spring onion</p>
              <p>1 mild chilli</p>
              <p>2 garlic cloves</p>
              <p>1 cup of frozen peas (thawed or half thawed)</p>
              <p>2lb – 900g left over cooked jasmine or basmati rice</p>
              <p>1 tsp turmeric powder</p>
              <p>Half tsp white pepper</p>
              <p>32oz – 900g left over cooked jasmine rice (2 cups uncooked)</p>
              <p>4 tsp soy sauce</p>
              <p>1 tsp Sesame oil</p>
              <p>3 tbsp oyster sauce</p>
              <p>Half lime juice</p>
              <p>Half cup grapeseed oil (or vegetable)</p>

              
            </div>
             
          </div>
        </div>
      </div>
    </div>
  )
}

export default friedrice
