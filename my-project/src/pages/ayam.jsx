import React from 'react'
import img1 from '../image/ayam1.jpeg.jpg'
import img2 from '../image/ayam2.jpg' 

const ayam = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img2} alt="friedrice" />
        <div className="fried-text">
           <p>Ayam Goreng Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Ayam Goreng Rice Reciepe</h2>
      <b>The best Ayam Goreng you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
            <ol><strong>01.</strong> <p>Toast spices in a small skillet over medium heat (no oil) for 2 minutes or until the spices smell fragrant. Transfer seeds into Nutribullet, small food processor OR into a tall jug that fits a stick blender.</p></ol>
            <ol><strong>02.</strong><p>Add remaining Curry Paste ingredients and blend until smooth.</p> </ol>
            <ol><strong>03.</strong><p>Pour Curry Paste over chicken in a ziplock bag (or bowl, Note 6). Toss to coat, then marinate for 24 hours in the fridge, up to 48 hours.</p></ol>
            <ol><strong>04.</strong><p> Remove chicken from fridge 30 minutes prior to cooking and transfer into a bowl (most marinade should be stuck to chicken).</p></ol>
            <ol><strong>05.</strong><p>Preheat oven to 80°C/175°F and place rack on tray – to keep chicken warm.</p></ol>
            <ol><strong>06.</strong><p> Add cornflour to chicken and toss to coat – it will thicken the paste, this is what makes the craggy coating.</p></ol>
            <ol><strong>07.</strong><p>Pour oil into a wide, heavy based pot to a depth of 6 cm / 2.5 " (my 26cm/10.5" cast iron pot = 1.75L/quarts oil, Note 8). Heat over medium high heat to 180°C/350°F – maintain temp as best you can (Note 9). This recipe will NOT work well with an air fryer</p></ol>
            <ol><strong>08.</strong><p>Fry for 8 minutes (wings for 5 minutes), or until deep golden brown and internal temperature at thickest part is 75°C / 167°F.</p></ol>
            <ol><strong>09.</strong><p>Place cooked chicken onto rack and keep warm in oven. Cook remaining chicken.</p></ol>
            <ol><strong>10.</strong><p>Serve immediately, sprinkled with coriander and garlic-chilli garnish, if using. See in post for side dish suggestions!.</p></ol>
          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>1.25 kg / 2.5 lb chichen thighs ad drumsticks, bone in skin </p>
            <p>2 tsp coriander seeds</p>
            <p>2 tsp cumin seeds</p>
            <p>1 tsp fennel seeds</p>
            <p>3 garlic cloves</p>
            <p>1 tbsp ginger</p>
            <p>1 tbsp galangal</p>
            <p>1 1/2 tsp curry powder </p>
            <p>1 lemongrass</p>
            <p>1 tsp turmeric powder</p>
            <p>2 small eshalots </p>
            <p>1 1/2 tsp cooking/kosher salt</p>
            <p>1/2 tsp chilli powder </p>
            <p>2 tsp brown sugar</p>
            <p>7 tbsp coconut milk </p>
            <p>1/2 cup cornflour / cornstarch</p>
            <p>1.75 litres / quarts vegetable or canola oil</p>

            
          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default ayam
