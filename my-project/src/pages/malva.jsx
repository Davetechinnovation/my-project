import React from 'react'
import img from '../image/malva1.jpg'
import img1 from '../image/malva2.jpg'

const malva = () => {
  return (
   <div className='frieddrice'>
         <div className="heade-image">
             <img src= {img} alt="friedrice" />
             <div className="fried-text">
                <p> Malva Pudding Reciepe</p>
             </div>
         </div>
   
         <div className="main-fried-rice">
           <img src= {img1} alt="friedrice" />
         </div>
   
         <div className="friedrice-content">
           <div className="head">
           <h2> Malva Pudding Reciepe</h2>
           <b>The best  Malva Pudding you will taste!</b>
           </div>
           
   
           <div className="tutorial">
             <div className="steps">
               <div className="make">
               <ol><strong>01.</strong> <p>Preheat oven to 350°F (180°C).</p></ol>

                <ol><strong>02.</strong> <p>In a large mixing bowl, whisk together flour, sugar, and salt.</p></ol>

                <ol><strong>03.</strong> <p>In a separate bowl, whisk together milk, water, and baking soda.</p></ol>

                <ol><strong>04.</strong> <p>Add the wet ingredients to the dry ingredients and stir until combined.</p></ol>

                <ol><strong>05.</strong> <p>Add apricot jam, egg, and vanilla extract. Mix well.</p></ol>

                <ol><strong>06.</strong> <p>Pour the mixture into a 9x13-inch baking dish.</p></ol>

                <ol><strong>07.</strong> <p>Bake for 35-40 minutes or until the pudding is golden brown.</p></ol>

                <ol><strong>08.</strong> <p>While the pudding is baking, prepare the sauce.</p></ol>

                <ol><strong>09.</strong> <p>In a medium saucepan, combine sugar, water, and salt. Heat over medium heat, stirring until the sugar dissolves.</p></ol>

                <ol><strong>10.</strong> <p>Bring the mixture to a boil, then reduce the heat to low and simmer for 5 minutes.</p></ol>

                <ol><strong>11.</strong> <p>Remove the sauce from the heat and stir in heavy cream, butter, and vanilla extract.</p></ol>

                <ol><strong>12.</strong> <p>Remove the pudding from the oven and let it cool for a few minutes.</p></ol>

                <ol><strong>13.</strong> <p>Poke holes all over the top of the pudding with a skewer or fork.</p></ol>

                <ol><strong>14.</strong> <p>Pour the warm sauce over the pudding, allowing it to absorb the liquid.</p></ol>

                <ol><strong>15.</strong> <p>Serve the Malva Pudding warm, topped with additional sauce if desired.</p></ol>


  
               </div>
               <div className="border"></div>
   
               <div className="ingredients">
                 <h2>Ingedients:</h2>
                    <p>For the pudding:</p>
                    <p>1 cup all-purpose flour</p>
                    <p>1 cup granulated sugar</p>
                    <p>1/2 cup milk</p>
                    <p>1/4 cup water</p>
                    <p>1/4 teaspoon salt</p>
                    <p>1/2 teaspoon baking soda</p>
                    <p>1 tablespoon apricot jam</p>
                    <p>1 large egg</p>
                    <p>1 teaspoon vanilla extract</p>
                    <p>For the sauce:</p>
                    <p>1 cup granulated sugar</p>
                    <p>1 cup water</p>
                    <p>1/2 cup heavy cream</p>
                    <p>1/4 teaspoon salt</p>
                    <p>1 tablespoon unsalted butter</p>
                    <p>1 teaspoon vanilla extract</p>

   
                
               </div>
                
             </div>
           </div>
         </div>
       </div>
  )
}

export default malva
