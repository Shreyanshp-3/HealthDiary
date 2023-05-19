import './allstyles.css'

import l1 from './images/l1.jpg';
import l2 from './images/l2.jpeg';
import l3 from './images/l3.jpg';
import l4 from './images/l4.jpeg';



import React from 'react'

const Low_calorie = () => {
  return (
    <>
      <center>
        <h4 className='tab1'>Low Diet Features</h4>


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
      </center >

      {/* <br></br> */}
      {/* <br></br> */}
      <div className='maindata'>
        <h2 className='dataheading'> Planning Weight, Calories & Nutrients</h2>
        <div className='row'>

          <div className='col-lg-2'></div>
          <div className='ctab col-lg-4 '>

            <div class="card cardp1  border-0" >
              <img src={l1} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Planning Weight & calories</h5>
                <p class="cardtext">Discover how calories planning works at My Fitness App to help your weight goal.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={l2} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Develop a personalized nitrition plan</h5>
                <p class="cardtext">Learn how to customize you targets and track more than 50000 nutrients with My fitness .</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

          </div>

        </div>
        <div className='row'>

          <div className='col-lg-2'></div>
          <div className='ctab col-lg-4 '>

            <div class="card cardp1  border-0" >
              <img src={l3} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Planning Weight & calories</h5>
                <p class="cardtext">Discover how calories planning works at My Fitness App to help your weight goal.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={l4} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Develop a personalized nitrition plan</h5>
                <p class="cardtext">Learn how to customize you targets and track more than 50000 nutrients with My fitness .</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

          </div>

        </div>
        <br></br>
        <br></br>
      </div>
    </>
  )
}

export default Low_calorie