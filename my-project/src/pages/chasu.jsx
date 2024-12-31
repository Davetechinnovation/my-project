import React from 'react'
import img from '../image/chasu1.png'
import img1 from '../image/chasu2.png'

const chasu = () => {
  return (
    <div className='frieddrice'>
    <div className="heade-image">
        <img src= {img} alt="friedrice" />
        <div className="fried-text">
           <p>Chashu Pork Reciepe</p>
        </div>
    </div>

    <div className="main-fried-rice">
      <img src= {img1} alt="friedrice" />
    </div>

    <div className="friedrice-content">
      <div className="head">
      <h2>Chashu Don Pork Reciepe</h2>
      <b>The best Chashu Don Pork you will taste!</b>
      </div>
      

      <div className="tutorial">
        <div className="steps">
          <div className="make">
            <ol><strong>01.</strong> <p>Using a frying pan over a medium/high heat, heat the oil until hot. Add a few slices of the pork belly and sear for 1-2 minutes each side. Repeat with the remaining slices. If you're using a rolled pork belly, sear the entire surface until nicely browned.</p></ol>
            <ol><strong>02.</strong><p>Add the pork to a smallish pan then add all the poaching liquid ingredients along with 2-3 cups of water (enough to cover the pork completely).</p> </ol>
            <ol><strong>03.</strong><p>Bring to a boil then reduce the heat to low, cover the pan and simmer gently (barely simmering) for 1½-2 hours until the pork is tender. The rolled pork may take a little longer depending on its size.</p></ol>
            <ol><strong>04.</strong><p>Near the end of cooking, cook the rice and keep warm.</p></ol>
            <ol><strong>05.</strong><p>While the pork is cooking, prepare the garnish/toppings and keep cool in the fridge.</p></ol>
            <ol><strong>06.</strong><p>To make the soft boiled egg, add eggs to boiling water and cook for 6 minutes. Drain the water and cool the eggs with cold water for a minute. Peel the eggs now as they'll still be warm inside and easier to peel than if left until cold. (see notes below on how to make marinated eggs).</p></ol>
            <ol><strong>07.</strong><p>When the pork is cooked, remove from the heat and then carefully remove the pork. Cut into small pieces and then add to a bowl with a ladleful of the braising liquid to keep it moist.</p></ol>
            <ol><strong>08.</strong><p>Drain the cooking liquid and discard the solids. Take 2 cups of the liquid and add to a small pan. Bring to a boil and bubble for 5 minutes to reduce. This will intensify the flavour. Remove from the heat and set aside.</p></ol>
            <ol><strong>09.</strong><p>To arrange the bowl, add a generous layer of the cooked rice then spoon over some pork. Pour over a little of the reduced sauce and then arrange the onion, radish and pickles on top. Slice the egg in half and add to the bowl scatter over some sesame seeds and serve hot!</p></ol>
            <ol><strong>10.</strong><p>To eat, mix everything together and eat with an Asian spoon alongside chopsticks.</p></ol>

          </div>
          <div className="border"></div>

          <div className="ingredients">
            <h2>Ingedients:</h2>
            <p>1½ lb pork belly (700g)</p>
            <p>2 tbsp vegetable oil</p>
            <p>¾ cup light soy sauce</p>
            <p>¼ cup sake</p>
            <p>3 tbsp sugar</p>
            <p>5 slices ginger</p>
            <p>2 star anise</p>
            <p>2 spring onion (green onion/scallion)</p>
            <p>2 cups rice (cooked)</p>
            <p>4 eggs (soft boiled and peeled)</p>
            <p>1 cup daikon radish (thinly juilenned)</p>
            <p>2 spring onions (green onion/scallion)(finely sliced)</p>
            <p>4 tsp pickled ginger (optional)</p>
            <p>4 tsp sesame seeds (optional)</p>
            
          </div>
           
        </div>
      </div>
    </div>
  </div>
  )
}

export default chasu
