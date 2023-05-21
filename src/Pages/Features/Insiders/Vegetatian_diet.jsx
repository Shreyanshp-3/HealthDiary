import React from 'react'
import './allstyles.css'

import vv1 from './images/vv1.jpg';
import vv2 from './images/vv2.jpeg';
import vv3 from './images/vv3.jpeg';
import vv4 from './images/vv4.jpeg';

const Vegetatian_diet = () => {
  return (
    <>
      <center>
        <h4 className='tab1'>Vegetatian Diet Features</h4>


        <p className='pag1'>

          The articles below discuss Nutrition, Weight Control, Diabetes and provide valuable tips for losing weight healthily.
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
              <img src={vv1} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Starting a vegetarian diet? 
                Follow these steps to get maximum benefits</h5>
                <p class="cardtext">It is essential toa have a roadmap for a healthy and balanced vegetarian plan.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={vv2} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">6 Essential nutrients for vegetarians</h5>
                <p class="cardtext"> Thinking about a vegetarian diet? Here are the six most important nutrients for vegetarians and the supplements you need.</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>

          </div>

        </div>
        <div className='row'>

          <div className='col-lg-2'></div>
          <div className='ctab col-lg-4 '>

            <div class="card cardp1  border-0" >
              <img src={vv3} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">D vegetarian diets give you enough protein</h5>
                <p class="cardtext">Wondering if you can meet your protein needs from a vegetarian diet?Yes, you
                you can, and here's how!.</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={vv4} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">How to prevent Diabetes naturally</h5>
                <p class="cardtext">Learn how to prevent a type 2 Diabetes naturally by incorporating a plant based diet .</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>

          </div>

        </div>
        <br></br>
        <br></br>
      </div>

    </>)
}

export default Vegetatian_diet