import React from 'react'
import './allstyles.css'
import hp1 from './images/hp1.jpg';
import hp2 from './images/hp2.jpeg';
import hp3 from './images/hp3.jpeg';
import hp4 from './images/hp4.jpeg';
import hp5 from './images/hp5.jpeg';
import hp6 from './images/hp6.jpeg';


const High_protien = () => {
  return (

    <>
      <center>
        <h4 className='tab1'>High Protein Diet Features</h4>


        <p className='pag1'>
          The articles below discuss Nutrition, Weight Control, Diabetes and provide valuable tips on using MyNetDiary apps for losing weight healthily.
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
              <img src={hp1} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">If you are starting a help protein eating
                plan check out these 5 steps for success!</h5>
                <p class="cardtext">Whether you are starting a heigh-protein eating plan for weight loss
                or to build a muscle mass,My health diary is here to help you.</p>
                <a href="#" class="btn btn-primary">Read more!</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={hp2} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">What are protein powder pros and cons</h5>
                <p class="cardtext">Learn about the types of protein powder and How to use them.</p>
                <a href="#" class="btn btn-primary">Read more!</a>
              </div>
            </div>

          </div>

        </div>
        <div className='row'>

          <div className='col-lg-2'></div>
          <div className='ctab col-lg-4 '>

            <div class="card cardp1  border-0" >
              <img src={hp3} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Can high protein meals help you lose weight</h5>
                <p class="cardtext">Here's what one study found.</p>
                <a href="#" class="btn btn-primary">Read more!</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={hp4} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">The benefits of eating protein</h5>
                <p class="cardtext">Learn about animal and plant based sources and how to make smart choices between them .</p>
                <a href="#" class="btn btn-primary">Read more!</a>
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
              <img src={hp5} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Meet your protein needs or muscle gain</h5>
                <p class="cardtext">5 tips from a sports nutritionist for building and maintaining muscle.</p>
                <a href="#" class="btn btn-primary">Read more!</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={hp6} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">5 Ingredients or less high protein snack ideas for weight loss</h5>
                <p class="cardtext">Be a smart snacker with these tasty ideas.</p>
                <a href="#" class="btn btn-primary">Read more!</a>
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

export default High_protien