import React from 'react'
import img from '../image/hainan1.jpeg.jpg'
import img1 from '../image/hainan2.jpeg.jpg'

const Hainan = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p> Hainan Chicken and Rice Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Hainan Chicken and Rice Reciepe</h2>
      <b>The best Hainan Chicken and Rice you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
            <ol><strong>01.</strong> <p>Pat chicken dry and trim excess fat and skin from neck and tail areas; set fat and skin aside for rice. Sprinkle chicken with salt and vigorously rub and massage salt all over chicken to “exfoliate” skin. (Skin should look smooth and be free of any lumps, bumps, or imperfections. Take time to exfoliate it well; the better scrubbed the skin is, the better the final texture will be.) Sprinkle with white pepper.</p></ol>
            <ol><strong>02.</strong><p>Place chicken, breast-side up, in a large stockpot and add rice wine, soy sauce, ginger, scallions, and pandan leaves (if using). Cover chicken with water by about 1 inch, ensuring that chicken is fully submerged.</p> </ol>
            <ol><strong>03.</strong><p>Heat over medium-high heat and bring to a simmer. Cover and reduce heat to low to maintain a bare simmer and poach chicken until breast registers 155°F (68°C) and legs register 165°F (74°C) with an instant-read thermometer (avoiding bone), 25 to 30 minutes (the breast and leg pieces may reach their respective temperatures at different times; make sure to remove each as it is ready). Remove chicken from pot and immediately transfer to a large bowl of ice water. Soak chicken in ice bath until cool, about 10 minutes. Transfer chicken to a plate, gently pat dry, and rub sesame oil all over chicken. Set aside until serving.</p></ol>
            <ol><strong>04.</strong><p>Strain broth, discarding solids. Return broth to pot and bring to a boil over medium-high heat. Boil until reduced to approximately 9 cups (do not skim fat). Season to taste and let cool 15 minutes to allow fat to rise to surface.</p></ol>
            <ol><strong>05.</strong><p>In a small saucepan, cook reserved chicken fat and skin trimmings over medium heat, stirring often, until fat begins to render and surface of saucepan is coated in melted fat. Add garlic and ginger and cook, stirring constantly, until fragrant and lightly golden, 1 to 2 minutes. Stir in rice until coated in fat, then remove from heat. Transfer rice mixture to a rice cooker and cover with 3 cups broth (using as much fat as possible from broth). Cook rice according to manufacturer’s directions.</p></ol>
            <ol><strong>06.</strong><p>In a small saucepan, heat oil and shallots over medium heat, stirring, until deep golden brown, about 10 minutes. Using a slotted spoon, transfer shallots to a small bowl lined with a paper towel.</p></ol>
            <ol><strong>07.</strong><p>In a large skillet with a lid, bring 3/4 cup broth to a simmer over medium-high heat. Add bok choy and cover. Cook until just tender but still bright green, 2 to 3  minutes. Transfer to a serving dish and sprinkle with fried shallots.</p></ol>
            <ol><strong>08.</strong><p>Reheat remaining broth and ladle into bowls. Carve chicken off bones and slice thinly (you can leave the bone in the drumstick, if desired). Arrange chicken on a plate, spooning a small amount of broth over top. Serve with rice, bok choy, sliced cucumber, cilantro, chile sauce, and kecap manis.</p></ol>

          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>1 small whole chicken (3 to 3 1/2 pounds; 1.3 to 1.6kg), giblets <br />removed</p>
            <p>2 tablespoons (18g) Diamond Crystal kosher salt</p>
            <p>1/8 teaspoon freshly ground white pepper</p>
            <p>2 tablespoons (30ml) rice wine, such as Shaoxing</p>
            <p>2 tablespoons (30ml) soy sauce</p>
            <p>One 3-inch knob ginger, peeled and sliced (3 tablespoons; 40g)</p>
            <p>3 medium scallions (2.5 ounces; 71g), trimmed and halved</p>
            <p>2 pandan leaves, tied into knots, optional (see notes)</p>
            <p>1 tablespoon (15ml) toasted sesame oil</p>
            <p>1 tablespoon minced garlic (20g; from 3 cloves)</p>
            <p>1 tablespoon minced fresh peeled ginger <br />(15g; from a 1 1/2–inch piece)</p>
            <p>2 cups long grain white rice (12 1/2 ounces; 355g), rinsed well</p>
            <p>3 tablespoons (45ml) vegetable oil</p>
            <p>2 medium shallots (2 1/4 ounces; 64g total)</p>
            <p>8 ounces (227g) baby bok choy (6 small heads)</p>
            <p>1 small cucumber (9 ounces; 255g), sliced (2 cups)</p>
            <p>1 bunch fresh cilantro (4 ounces; 113g), stems and <br />leaves chopped (2 cups)</p>
            <p>Chile garlic sauce</p>
            <p>Kecap manis (sweet soy sauce)</p>

          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hainan
