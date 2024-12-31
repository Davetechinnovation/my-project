import React from 'react'
import img from '../image/chicken fajitas1.jpg'
import img1 from '../image/chicken fajitas2.jpg'

const fajitas = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p>Chicken Fajitas Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Chicken Fajitas Reciepe</h2>
      <b>The best Chicken Fajitas you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
            <ol><strong>01.</strong> <p>Make fajita seasoning. Add the fajita seasoning ingredients to a small mixing bowl and stir together.</p></ol>
            <ol><strong>02.</strong><p>Season the chicken. Generously sprinkle the fajita seasoning on both sides of the chicken and use your fingers to press it into the chicken.</p> </ol>
            <ol><strong>03.</strong><p>Cook the chicken. Heat the oil in a large skillet over medium heat. Sear the chicken breasts for about 7 to 8 minutes on each side.</p></ol>
            <ol><strong>04.</strong><p>Slice the veggies. While your chicken is cooking, cut the bell peppers and onion into thin slices.</p></ol>
            <ol><strong>05.</strong><p>Cook the veggies. Once the chicken has finished cooking, remove it to a plate and let it rest for a couple of minutes. Add the bell peppers and onion to the same skillet over medium heat and saute for 4 to 5 minutes, stirring frequently.</p></ol>
            <ol><strong>06.</strong><p>Slice the chicken. When the bell peppers are just about done sauteing, slice the chicken breasts into strips. You can slice those pieces in half again for thinner strips of chicken.</p></ol>
            <ol><strong>07.</strong><p>Mix and serve. Add the chicken back into the skillet, add a squeeze of fresh lime juice and stir everything together. Serve immediately with tortillas and extra toppings such as sour cream, pico de gallo and guacamole.</p></ol>

          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>3 boneless skinless chicken breasts</p>
            <p>1 onion, thinly sliced</p>
            <p>3 bell peppers , thinly sliced</p>
            <p>2 tablespoons olive oil</p>
            <p>½ lime</p>
            <p>½ tablespoon chili powder</p>
            <p>½ tablespoon ground cumin</p>
            <p>1 teaspoon garlic powder</p>
            <p>½ teaspoon paprika</p>
            <p>½ teaspoon oregano</p>
            <p>½ teaspoon kosher salt</p>
            <p>¼ teaspoon ground black pepper</p>
            <p>tortillas</p>
            <p>sour cream</p>
            <p>pico de gallo</p>
            <p>avocado</p>

           
          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default fajitas
