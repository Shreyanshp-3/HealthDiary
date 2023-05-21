import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Food_styles.css'



const Food_Nav = () => {

const navgiate  = useNavigate();

    return (
       <>
      <nav>
        <center >
          <h4 className='tab1'>Food Information / Nutrition / Recipes</h4>


          <p className='pag1'>
            This page includes all the Information about the recipes and their ingredients.
            {/* <br /> */}
            Which ingredients in which recipes contains what amount of the nutrition value.

            {/* <br /> */}
            These also include how to use the information according to the need <br></br>
            This has the different kind of recipes as per the information given to it.
            <br />
            All the recipes are sorted in a Unique way that gets easier to access them according to the need.
            
   
          </p>
        </center>
        <div className='feature_Nav'>


          <h4 style={{ float: 'right' }} className='tab2' onClick={() => navgiate(`/food/FoodSearch`)}>FoodSearch</h4>
          <h4 className='tab2' onClick={() => navgiate(`/food/Howto`)}>How to search</h4>
          <h4 className='tab2' onClick={() => navgiate(`/food/Nutrition`)}>Recipes</h4>
          <h4 className='tab2' onClick={() => navgiate(`/food/Nutrition`)}>Diet Plans</h4>


        </div>


      </nav >
    </>
  )
}

export default Food_Nav