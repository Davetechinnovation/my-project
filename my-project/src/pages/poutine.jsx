import React from 'react'
import img from '../image/poutinee.png' 
import img1 from '../image/poutin.png'

const poutine = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p>Poutine Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Poutine Reciepe</h2>
      <b>The best Poutine meal you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
            <ol><strong>01.</strong> <p>Prepare the gravy: In a small bowl, dissolve the cornstarch in the water and set aside.</p></ol>
            <ol><strong>02.</strong><p>In a large saucepan, melt the butter. Add the flour and cook, stirring regularly, for about 5 minutes, until the mixture turns golden brown.</p> </ol>
            <ol><strong>03.</strong><p>Add the beef and chicken broth and bring to a boil, stirring with a whisk. Stir in about HALF the cornstarch mixture and simmer for a minute or so. If you'd like your gravy thicker, add a more of the cornstarch mixture, in small increments, as needed, to thicken. Season with pepper. Taste and add additional salt, if necessary, to taste. Make ahead and re-warm or keep warm until your fries are ready.</p></ol>
            <ol><strong>04.</strong><p>For Deep-Fried Fries: Prepare your potatoes and cut into 1/2-inch thick sticks. Place into a large bowl and cover completely with cold water. Allow to stand at least one hour or several hours. When ready to cook, heat your oil in your deep fryer or large, wide, heavy cooking pot to 300° F.</p></ol>
            <ol><strong>05.</strong><p>Remove the potatoes from the water and place onto a sheet of paper towel. Blot to remove as much excess moisture as possible.</p></ol>
            <ol><strong>06.</strong><p>Add your fries to the 300°F oil and cook for 5-8 minutes, just until potatoes are starting to cook but are not yet browned. Remove potatoes from oil and scatter on a wire rack. Increase oil temperature to 375°F Once oil is heated to that temperature, return the potatoes to the fryer and cook until potatoes are golden brown. Remove to a paper towel-lined bowl.</p></ol>
            <ol><strong>07.</strong><p>To Prepare Poutine: Add your fried or baked fries to a large, clean bowl. Season lightly with salt while still warm. Add a ladle of hot poutine gravy to the bowl and using tongs, toss the fries in the gravy. Add more gravy, as needed to mostly coat the fries.</p></ol>
            <ol><strong>07.</strong><p>Add the cheese curds and toss with the hot fries and gravy. Serve with freshly ground pepper. Serve immediately.</p></ol>
          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>3 Tbsp cornstarch</p>
            <p>2 Tbsp water</p>
            <p>6 Tbsp unsalted butter</p>
            <p>1/4 cup unbleached all purpose flour</p>
            <p>20 oz beef broth</p>
            <p>10 oz chicken broth</p>
            <p>Pepper, to taste</p>
            <p>2 lbs Russet potatoes, (3-4 medium potatoes)</p>
            <p>Peanut or other frying oil</p>
            <p>1 - 1 1/2 cups white cheddar cheese curds,(Or torn chunks of <br />mozzarella cheese would be the closest substitution)</p>
           
          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default poutine
