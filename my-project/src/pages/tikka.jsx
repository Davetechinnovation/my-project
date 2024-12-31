import React from 'react'
import img from '../image/chicken tikka1.jpg'
import img1 from '../image/chicken tikka2.jpg'


const tikka = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p>Chicken Tikka Masala Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Chicken Tikka Masala Reciepe</h2>
      <b>The best Chicken Tikka Masala you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
           <div className="make">
                <ol><strong>01.</strong> <p>Cut the chicken breasts into thin strips.  Place in bowl add a little grapeseed oil, white pepper,  2 teaspoons soy sauce and one teaspoon sesame seed oil.</p></ol>
                <ol><strong>02.</strong><p>Cover with cling wrap and leave in fridge to marinate overnight (3 hours minimum).</p> </ol>
                <ol><strong>03.</strong><p>Heat 1 tbsp oil in a non stick pan over high heat until smoking. Add half the chicken and spread out. Leave for 2 minutes or until charred. Turn each piece and cook the other side until charred - don't worry if not cooked inside. (Note 4, also Video helpful here) Remove into bowl.</p></ol>
                <ol><strong>04.</strong><p>Scrape out charred bits left in pan and discard. Add more oil if required and cook remaining chicken.</p></ol>
                <ol><strong>05.</strong><p>Wipe skillet with paper towels (or do this part in a pot as you need a lid). Turn heat down to medium high.</p></ol>
                <ol><strong>06.</strong><p>Add oil and butter. When butter is melted, add onions, ginger and salt.</p></ol>
                <ol><strong>07.</strong><p>Cook, stirring constantly to ensure it doesn't burn, until the ginger is starting to turn golden and the onions smell sweet, about 5 - 7 minutes.</p></ol>
                <ol><strong>08.</strong><p>Reduce the heat to medium. Add the garlic and paprika, and cook for 2 minutes.</p></ol>
                <ol><strong>09.</strong><p>Add the Curry Sauce Spices, and cook a further 2 minutes, stirring.</p></ol>
                <ol><strong>10.</strong><p>Add tomato passata and water, and mix. Bring to a simmer, then cover and reduce heat to low.</p></ol> 
                <ol><strong>11.</strong><p>Simmer for 15 minutes, stirring occasionally.</p></ol>
                <ol><strong>12.</strong><p>Pour curry into a bowl, then use a stick blender to puree until smooth (Note 5).</p></ol>
                <ol><strong>13.</strong><p>Return sauce to skillet. Add cream, sugar and butter. Stir to melt the butter.</p></ol>
                <ol><strong>14.</strong><p>Add chicken, stir. Simmer for a few minutes until the chicken is cooked through.</p></ol>
                <ol><strong>15.</strong><p>Optional: Sprinkle with a pinch of extra garam masala at the end.</p></ol>
                <ol><strong>16.</strong><p>Serve over basmati rice, sprinkled with coriander/cilantro if desired. Try this No Yeast Flatbread as a quick naan!</p></ol>
           </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>600g/ 1.2lb chicken thigh</p>
            <p>1/2 cup plain yoghurt, full fat best (Greek is fine)</p>
            <p>6 cloves garlic , minced (~1.5 tbsp)</p>
            <p>1 tbsp fresh ginger , grated</p>
            <p>1 tsp garam masala </p>
            <p>1 tsp each salt, cumin, ground coriander, paprika.</p>
            <p>1 tbsp vegetable oil</p>
            <p>1/8 tsp cayenne pepper</p>
            <p>Pinch black pepper</p>
            <p>2 tsp lemon juice</p>
            <p>1 - 2 tbsp oil</p>
            <p>2 tsp turmeric</p>
            <p>1 tbsp garam masala</p>
            <p>2 tsp coriander</p>
            <p>1 tsp cumin, 1/8 tsp cardamom powder, 1/8 tsp cayenne pepper</p>
            <p>3 tbsp (65ml) vegetable oil (Note 3), 30g / <br /> 2 tbsp unsalted butter OR ghee</p>
            <p>1 onion, finely chopped (brown, white or yellow), 1 tsp salt</p>
            <p>2 tbsp fresh ginger , grated, 6 cloves garlic , <br /> crushed or grated, 1 tbsp paprika </p>
            <p>1 2/3 cups (400ml) tomato passata (tomato puree), <br />1 2/3 cups (400ml) water</p>
            <p>100 ml (1/3 cup + 1 tbsp) cream , 1 tsp sugar, 50g <br /> / 3 tbsp unsalted butter OR ghee</p>

            

           
          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default tikka
