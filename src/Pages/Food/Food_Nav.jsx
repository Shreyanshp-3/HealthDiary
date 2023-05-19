import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Food_styles.css'



const Food_Nav = () => {

const navgiate  = useNavigate();

    return (
       <>
      <nav>
        <center >
          <h4 className='tab1'>Food Information / Nutrition</h4>


          <p className='pag1'>
            This page includes all the features and Libraries
            of different types of Diets present.
            {/* <br /> */}
            {/* <br /> */}
            There are mainly 6 types for health lifestyle.
            {/* <br /> */}
            Depending on them the characteristic. Get All the detailed
            Information about the Diets Given Below and Choose the perfect way to go with the diet.
            {/* <br /> */}
            The articles below discuss Nutrition, Weight Control, Diabetes and provide valuable tips for losing weight healthily.
          </p>
        </center>
        <div className='feature_Nav'>


          <h4 style={{ float: 'right' }} className='tab2' onClick={() => navgiate(`/food/FoodSearch`)}>FoodSearch</h4>
          <h4 className='tab2' onClick={() => navgiate(`/food/Howto`)}>How to search</h4>
          <h4 className='tab2' onClick={() => navgiate(`/food/Nutrition`)}>Keto Diet</h4>


        </div>


      </nav >
    </>
  )
}

export default Food_Nav