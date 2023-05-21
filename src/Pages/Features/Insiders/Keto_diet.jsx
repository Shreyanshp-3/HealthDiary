import React from 'react'
import './allstyles.css'
import k1 from './images/k1.jpg';
import k2 from './images/k2.jpeg';
import k3 from './images/k3.jpeg';
import k4 from './images/k4.jpeg';
import k5 from './images/k5.jpeg';
import k6 from './images/k6.jpeg';



const Keto_diet = () => {
  return (
    <>
      <center>
        <h4 className='tab1'>Keto Diet Features</h4>


        <p className='pag1'>
          The articles below will help you be successful on your keto plan, learn about nutrition, and gain valuable tips for using MyNetDiary.
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
              <img src={k1} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Get started on keto Diet</h5>
                <p class="cardtext">You done your research and want to get started on a keto diet, but aren't sure where to begin?
                  Follow these steps</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={k2} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Monitoring ketones: How do I know I am in ketosis?</h5>
                <p class="cardtext">Thinking about the monitoring ketones? You may get additional information about this down below</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>

          </div>

        </div>
        <div className='row'>

          <div className='col-lg-2'></div>
          <div className='ctab col-lg-4 '>

            <div class="card cardp1  border-0" >
              <img src={k3} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">These are the top 10 kept foods you should include if you're on the diet</h5>
                <p class="cardtext">If you're on the keto diet,here are the top 10 keto foods to include.</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={k4} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">10 Staples to turn your pantry into a healthy source  for a low carb diet </h5>
                <p class="cardtext">You wont regret putting these tasty staples in your shopping cart</p>
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
              <img src={k5} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">keto Food Grade : Helping you find the best keto foods</h5>
                <p class="cardtext">Need help finding the beset keto Foods?. Follow the below like to get all the resources for keto diet</p>
                <a href="#" class="btn btn-primary">Read More!</a>
              </div>
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className='ctab col-lg-4'>
            <div class="card cardp1  border-0" >
              <img src={k6} class="cardimage card-img-top" alt="..." />
              <div class="card-body cardb">
                <h5 class="card-title cardtitle">Are you missing out on these important keto micronutrients?</h5>
                <p class="cardtext">Is your  keto diet lacking in micronutrients? Make sure
                you are getting these important vitamins and minerals if you are following a keto diet.</p>
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

export default Keto_diet