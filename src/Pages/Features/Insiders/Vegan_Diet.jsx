import React from 'react'
import './allstyles.css'
import v1 from './images/v1.jpeg';
import v2 from './images/v2.jpeg';
import v3 from './images/v3.jpeg';
import v4 from './images/v4.jpeg';

const Vegan_Diet = () => {
    return (
        <>
            <center>
                <h4 className='tab1'>Vegan Diet Features</h4>


                <p className='pag1'>

                    The articles below discuss Nutrition, Weight Control, Diabetes and provide valuable tips for losing weight healthily.
                </p>
            </center >

            {/* <br></br> */}
            {/* <br></br> */}
            <div className='maindata'>
                <h2 className='dataheading'>Getting Started</h2>
                <div className='row'>

                    <div className='col-lg-2'></div>
                    <div className='ctab col-lg-4 '>

                        <div class="card cardp1  border-0" >
                            <img src={v1} class="cardimage card-img-top" alt="..." />
                            <div class="card-body cardb">
                                <h5 class="card-title cardtitle">Start a vegan diet? Follow these steps to get maximum benefits</h5>
                                <p class="cardtext">It is essential to have a roadmap  for a healthy and balanced vegan plan.</p>
                                <a href="#" class="btn btn-primary">Read More!</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='ctab col-lg-4'>
                        <div class="card cardp1  border-0" >
                            <img src={v2} class="cardimage card-img-top" alt="..." />
                            <div class="card-body cardb">
                                <h5 class="card-title cardtitle">6 Essential nutrients for vegans</h5>
                                <p class="cardtext">Thinking about a vegan diet? Here are the six most important nutrients
                                    for vegan and the supplements you might need .</p>
                                <a href="#" class="btn btn-primary">Read More!</a>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='row'>

                    <div className='col-lg-2'></div>
                    <div className='ctab col-lg-4 '>

                        <div class="card cardp1  border-0" >
                            <img src={v3} class="cardimage card-img-top" alt="..." />
                            <div class="card-body cardb">
                                <h5 class="card-title cardtitle">Do vegan diets give you enough protein</h5>
                                <p class="cardtext">Here are our favorite plant based proof sources that will fill and fuel you.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className='ctab col-lg-4'>
                        <div class="card cardp1  border-0" >
                            <img src={v4} class="cardimage card-img-top" alt="..." />
                            <div class="card-body cardb">
                                <h5 class="card-title cardtitle">Curious how to use tofu in more tasty ways?
                                Check out these 5 meal  ideas!</h5>
                                <p class="cardtext">Tofu is versatile, nutritious and adapts well to many different kind of recipes .</p>
                                <a href="#" class="btn btn-primary">Read More!</a>
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

export default Vegan_Diet