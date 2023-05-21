import React from 'react'

import './allstyles.css'
import lf1 from './images/lf1.jpg';
import lf2 from './images/lf2.jpeg';
import lf3 from './images/lf3.jpeg';
import lf4 from './images/lf4.jpeg';
import lf5 from './images/lf5.jpeg';
import lf6 from './images/lf6.jpeg';

const Low_fat = () => {
  return (
    <>
      <center>
        <h4 className='tab1'>Low Fat Diet Features</h4>


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
              <img src={lf1} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Starting a low fat eating plan? 6 steps for success</h5>
                <p class="cardtext">Whether you are following a low fat diet for weight loss, My health diary is here to help you...</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={lf2} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Dietary fats</h5>
                <p class="cardtext">Learn about the different types of fats and how to make healthier food choices.</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>

          </div>

        </div>
        <div className='row'>

          <div className='col-lg-2'></div>
          <div className='ctab col-lg-4 '>

            <div class="card cardp1  border-0" >
              <img src={lf3} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Plate method for meal planning </h5>
                <p class="cardtext">Try this fool proof method for limiting extra fats and calories.</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={lf4} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Want to cook without oil? How to  ditch the oil for every cooking method</h5>
                <p class="cardtext">Believe or not, its not hard to cook without oil.Here are out best tips and tricks</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>

          </div>

        </div>
        <br></br>
        <br></br>
      </div>
      <div className='maindata'>
        {/* <h2 className='dataheading'> Planning Weight, Calories & Nutrients</h2> */}
        <div className='row'>

          <div className='col-lg-2'></div>
          <div className='ctab col-lg-4 '>

            <div class="card cardp1  border-0" >
              <img src={lf5} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Say no to bland food</h5>
                <p class="cardtext">Try these tips for cooking with herbs and spices.</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={lf6} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">How to make healthy home cooking easier</h5>
                <p class="cardtext">Set up your kitchen for success!</p>
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

export default Low_fat