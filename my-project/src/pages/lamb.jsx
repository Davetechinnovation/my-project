import React from 'react'
import img from '../image/lamb.jpg'
import img1 from '../image/lamb2.jpg'

const lamb = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p>Lamb Mansaf (Jordanian Lamb and Rice) Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Lamb Mansaf (Jordanian Lamb and Rice) Reciepe Reciepe</h2>
      <b>The best Lamb Mansaf (Jordanian Lamb and Rice) Reciepeyou will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
            <ol><strong>01.</strong> <p>Rinse the rice in cold water 2-3 times until the water runs clear. Cover with water and leave to soak.</p></ol>
            <ol><strong>02.</strong><p>Fry the nuts in 1tbsp oil or butter until lightly browned. Drain on kitchen paper and set aside to cool completely.</p> </ol>
            <ol><strong>03.</strong><p>Heat the butter in a large pan and then gently fry the onion, cumin seeds, cinnamon stick, bay leaves and cardamom for 3-4 minutes before adding the garlic then the tomato purée and stirring well. Fry for 1-2 minutes.</p></ol>
            <ol><strong>04.</strong><p>Add the lamb and cook for about 5 minutes to lightly brown. Pour in the jameed and 4 cups of water and bring to a simmer. Reduce the heat and cover the pan. Cook gently for 90 minutes until the meat is tender.</p></ol>
            <ol><strong>05.</strong><p>Strain the lamb through a sieve and retain all the liquid.</p></ol>
            <ol><strong>06.</strong><p>Add 2½ cups of the cooking liquid into a fresh pan along with a little salt & pepper and bring to a simmer.Drain the rice then add to the lamb liquid and stir only once. Reduce the heat to very low. Cover the pan and simmer very gently for 15 minutes until all the liquid has been absorbed. Remove from the heat and take off the lid, place a clean tea towel over the pan and then place the lid back on top. (The towel catches the excess steam and makes for fluffier rice.) Leave for 30 minutes.</p></ol>
            <ol><strong>07.</strong><p>Combine the lamb and all that was strained with it (discard the cinnamon stick) in a saucepan with the yoghurt and the remaining cooking liquid. Season with salt & pepper and simmer gently for 10 minutes.</p></ol>
            <ol><strong>08.</strong><p>Arranging the dish - if you managed to get hold of a large flatbread then place that on a large serving platter. If not, make a bed of smaller flatbreads to form one large surface. Turn out the rice and spread over the bread in a thick layer. Top with the lamb and a little sauce. Scatter over the nuts and fresh herbs. Serve hot, with more of the yoghurt sauce on the side.</p></ol>    
          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>2 tbsp unsalted butter (or olive oil)</p>
            <p>1 onion (finely chopped)</p>
            <p>1 tsp cumin seeds</p>
            <p>1/2 cinnamon stick</p>
            <p>4 cardamom pods</p>
            <p>2 bay leaves</p>
            <p>4 garlic cloves</p>
            <p>2 tsp tomato puree</p>
            <p>1.4 lb lamb shoulder (600g) cut into large chunks</p>
            <p>½ cup Jameed soup starter</p>
            <p>½ cup Greek yoghurt (plain)</p>
            <p>salt & pepper</p>
            <p>1 cup Basmati rice or coarse bulgur wheat</p>
            <p>1/4 cup pine nuts</p>
            <p>1/4 cup cashew nuts (unsalted)</p>
            <p>1/4 cup pistachio nuts (unsalted)</p>
            <p>1/4 cup sliced almonds</p>
            <p>1/4 cup fresh parsley (chopped)</p>
            <p>1/4 cup fresh mint (chopped)</p>

          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default lamb
