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
          The articles below will help you be successful with your low-carb plan, learn about nutrition, and gain valuable tips for using MyNetDiary.
        </p>
      </center >

      {/* <br></br> */}
      {/* <br></br> */}
      <div className='maindata'>
        <h2 className='dataheading'> Getting Started</h2>
        <div className='row'>

          <div className='col-lg-2'></div>
          <div className='ctab col-lg-4 '>

            <div class="card cardp1  border-0" >
              <img src={l1} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Starting Low-Carb Diet : 5 Steps for Success</h5>
                <p class="cardtext">Whether you are starting a low carb diet for weight loss or blodd sygar
                  level. Follow these 5 steps to maximize your success.</p>
                <a href="sda" class="btn btn-primary">Read More !</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={l2} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">10 Staples to turn your pantry healthy source for a
                  low carb lifestyle</h5>
                <p class="cardtext">You won't regret putting these tasty
                  Staples in your shopping cart</p>
                <a href="sdsa" class="btn btn-primary">Read More !</a>
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
                <h5 class="card-title cardtitle">Low Carb Food Grade</h5>
                <p class="cardtext">Need help finding healthy low carb foods? This might help you !</p>
                <a href="asda" class="btn btn-primary">Read More !</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={l4} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Are you missing out on these important vitamins
                and minerals if you are following a low carb diet</h5>
                <p class="cardtext">Learn how to customize you targets and track more than 50000 nutrients with My fitness .</p>
                <a href="asdw" class="btn btn-primary">Read More !</a>
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