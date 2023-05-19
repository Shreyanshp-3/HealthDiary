import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Fstyles.css'



const Features_Nav = () => {
  const navgiate = useNavigate();

  return (
    <>
      <nav>
        <center >
          <h4 className='tab1'>Diet Libraries</h4>


          <p className='pag1'>
            This page includes all the features and Libraries
            of different types of Diets present.
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


          <h4 style={{ float: 'right' }} className='tab2' onClick={() => navgiate(`/features/LowCal`)}>Low Diet</h4>
          <h4 className='tab2' onClick={() => navgiate(`/features/HighProtein`)}>High Protein</h4>
          <h4 className='tab2' onClick={() => navgiate(`/features/KetoDiet`)}>Keto Diet</h4>
          <h4 className='tab2' onClick={() => navgiate(`/features/LowFat`)}>Low Fat Diet</h4>
          <h4 className='tab2' onClick={() => navgiate(`/features/Vegan`)}>Vegan Diet</h4>
          <h4 className='tab2' onClick={() => navgiate(`/features/Vegetarian`)}>Vegetarian Diet</h4>

        </div>


      </nav >
    </>
  )
}

export default Features_Nav