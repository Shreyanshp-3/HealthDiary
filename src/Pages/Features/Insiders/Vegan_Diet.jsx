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
                            <img src={v1} class="cardimage card-img-top" alt="..." />
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
                            <img src={v2} class="cardimage card-img-top" alt="..." />
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
                            <img src={v3} class="cardimage card-img-top" alt="..." />
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
                            <img src={v4} class="cardimage card-img-top" alt="..." />
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

export default Vegan_Diet