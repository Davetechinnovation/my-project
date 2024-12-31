import React from 'react'
import img from '../image/spaghetti1.jpg'
import img1 from '../image/spaghetti2.jpg'

const spaghetti = () => {
  return (
   <div className='frieddrice'>
         <div className="heade-image">
             <img src= {img} alt="friedrice" />
             <div className="fried-text">
                <p>Spaghetti Reciepe</p>
             </div>
         </div>
   
         <div className="main-fried-rice">
           <img src= {img1} alt="friedrice" />
         </div>
   
         <div className="friedrice-content">
           <div className="head">
           <h2>Spaghetti Reciepe</h2>
           <b>The best Spaghetti you will taste!</b>
           </div>
           
   
           <div className="tutorial">
             <div className="steps">
               <div className="make">
               <ol>
                <strong>01.</strong>
                <p>Bring a large pot of salted water to a boil. Cook the spaghetti according to package instructions until al dente. Reserve 1 cup of pasta water before draining the spaghetti.</p>
                </ol>

                <ol>
                <strong>02.</strong>
                <p>In a large saucepan, heat the olive oil over medium heat. Add the chopped onion and cook until translucent, about 5 minutes.</p>
                </ol>

                <ol>
                <strong>03.</strong>
                <p>Add the minced garlic and cook for an additional minute, until fragrant.</p>
                </ol>

                <ol>
                <strong>04.</strong>
                <p>Add the crushed tomatoes, dried basil, and dried oregano. Stir well to combine. Season with salt and pepper to taste.</p>
                </ol>

                <ol>
                <strong>05.</strong>
                <p>Simmer the tomato sauce over low heat for 15-20 minutes, stirring occasionally, allowing the flavors to meld together.</p>
                </ol>

                <ol>
                <strong>06.</strong>
                <p>Add the reserved pasta water to the tomato sauce if desired, to achieve a creamier consistency.</p>
                </ol>

                <ol>
                <strong>07.</strong>
                <p>Combine the cooked spaghetti and tomato sauce. Toss well to coat the pasta evenly.</p>
                </ol>

                <ol>
                <strong>08.</strong>
                <p> Serve the spaghetti hot, topped with grated Parmesan cheese if desired. Enjoy!</p>
                </ol>

  
               </div>
               <div className="border"></div>
   
               <div className="ingredients">
                 <h2>Ingedients:</h2>
                    <p>500g spaghetti</p>
                    <p>2 tablespoons olive oil</p>
                    <p>1 onion, finely chopped</p>
                    <p>3 garlic cloves, minced</p>
                    <p>1 can (28 oz) crushed tomatoes</p>
                    <p>1 teaspoon dried basil</p>
                    <p>1 teaspoon dried oregano</p>
                    <p>Salt and pepper, to taste</p>
                    <p>Grated Parmesan cheese, for serving (optional)</p>


                
               </div>
                
             </div>
           </div>
         </div>
       </div>
  )
}

export default spaghetti
