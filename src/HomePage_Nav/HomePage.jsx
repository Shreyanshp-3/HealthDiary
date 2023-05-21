import React from 'react'
import './HomePage.css'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free/css/all.min.css';


import h1 from './Images/first_image_food.webp';
import h2 from './Images/secongimg.webp';

import c1 from './Images/learn.svg';
import c2 from './Images/22222.svg';
import c3 from './Images/33333.svg';

import r1 from './Images/r1.webp';
import r2 from './Images/r2.webp';
import r3 from './Images/r3.webp';




const HomePage = () => {
    return (
        <>

            <div className='body1'>


                <section className="header">
                    <div className="container-header">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 header-line">
                                <center>
                                    <h1 className="heading">
                                        Good Health Starts with What you eat !
                                    </h1>
                                    <p className="para1">
                                        Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with
                                        MyFitness.
                                    </p>
                                    <br></br>
                                    <center>
                                        <button type="button" className="btn1 btn btn-primary">Get Started</button>

                                    </center>
                                </center>
                            </div>
                            <div className="col-lg-6 col-md-12 header-image">
                                <center>
                                    <img className="header-img" src={h1} alt="image_food" />
                                </center>
                            </div>
                        </div>
                    </div>

                    <div className="container-header2">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 header-image2">
                                <center>
                                    <img className="header-img2" src={h2} alt="image_food" />
                                </center>
                            </div>
                            <div className="col-lg-6 col-md-12 header-line2">
                                <h1 className="heading2">
                                    Log from over Different Variety of foods.
                                </h1>
                                <p className="para1">
                                    Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with
                                    MyFitness.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <br></br> */}
                <section className="body1">
                    <div className="container-fluid3">
                        <center>
                            <h1 className="heading3">The Tools for Your Goals</h1>
                            <div className="row">
                                <div className="col-lg-4 col-md-6"></div>
                                <div className="col-lg-4">
                                    <p className="para3">
                                        Trying to lose weight, tone up, lower your bmi, or invest in your overall health?
                                        Track your daily meals and calories? We give you the right features to get there.
                                    </p>
                                </div>
                                <div className="col-lg-4"></div>
                            </div>
                            <br />
                        </center>
                        <div className="row cardsrow">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-3  col-md-4">
                                <center>
                                    <div className="card cardt ">
                                        <img src={c1} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Learn. Track. Improve.</h5>
                                            <p className="card-text">Keeping a food diary helps you understand your habits and increases
                                                your likelihood of hitting your goals</p>
                                        </div>
                                    </div>
                                </center>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <center>
                                    <div className="card cardt" >
                                        <img src={c2} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Logging Simplified.
                                            </h5>
                                            <p className="card-text">Scan barcodes, save meals and recipes, and use Quick Tools for fast
                                                and easy food tracking. Save the Daily data</p>
                                        </div>
                                    </div>
                                </center>
                            </div>
                            <div className="col-lg-3 col-md-4 ">
                                <center>
                                    <div className="card cardt" >
                                        <img src={c3} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Stay Motivated.

                                            </h5>
                                            <p className="card-text">Join the World's Largest Fitness Community for advice, tips, and
                                                propper support. Keep yourself always motivated</p>
                                        </div>
                                    </div>
                                </center>
                            </div>
                            {/* <div className="col-lg-1"></div> */}

                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />
                <br />
                <section className="congrats">
                    <div className="container-fluid4">
                        <center>
                            <h1 className="heading3">Recipies and Inspiration</h1>
                            <div className="row">
                                <div className="col-lg-4 col-md-4"></div>
                                <div className="col-lg-4">
                                    <p className="para3">
                                        Get nutritionist-approved recipes and motivational workout tips from MyFitnessPal experts.
                                        Get their goals achieved, Get inspired for the journey ahead
                                    </p>
                                </div>
                                <div className="col-lg-4"></div>
                            </div>
                        </center>
                        <div className="row cardsrow">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-3  col-md-4">
                                <center>
                                    <div className="card card2 ">
                                        <img src={r1} className="card-img-top newimg" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the
                                                bulk
                                                of the card's content.</p>
                                        </div>
                                    </div>
                                </center>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <center>
                                    <div className="card card2">
                                        <img src={r2} className="card-img-top newimg" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the
                                                bulk
                                                of the card's content.</p>
                                        </div>
                                    </div>
                                </center>
                            </div>
                            <div className="col-lg-3 col-md-4 ">
                                <center>
                                    <div className="card card2">
                                        <img src={r3} className="card-img-top newimg" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the
                                                bulk
                                                of the card's content.</p>
                                        </div>
                                    </div>
                                </center>
                            </div>
                            <div className="col-lg-1"></div>

                        </div>
                    </div>

                </section>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <section className="endingpara">
                    <div className="container-fluid5">
                        <center>
                            <h1 className="heading3">All and About</h1>
                            <div className="row">
                                <div className="col-lg-3 col-md-6"></div>
                                <div className="col-lg-6">
                                    <p className="para4">
                                        MyFitnessPal is one of the best weight loss apps and fitness apps, helping nearly 1 million
                                        members reach their nutrition and fitness goals every year. Members use it as a calories
                                        tracker and calorie counter to log their foods, and take advantage of the app’s food
                                        database that contains over 14 million foods. It’s not just a free calorie counter app —
                                        it’s also the best calorie counter app for people who are looking to take back control of
                                        their health and fitness.
                                    </p>
                                </div>
                                <div className="col-lg-3"></div>
                            </div>
                        </center>
                    </div>
                </section>
                <br></br>
                {/* <section className="footer">
                <div className="footer-basic">
                    <footer>
                        <div className="social">
                            <a href="#">
                                <i className="icon ion-social-instagram"></i>
                            </a>
                            <a href="#">
                    
                            </a>
                            <a href="#">
                                <i className="icon ion-social-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="icon ion-social-facebook"></i>
                            </a>
                        </div>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Home</a></li>
                            <li className="list-inline-item"><a href="#">Services</a></li>
                            <li className="list-inline-item"><a href="#">About</a></li>
                            <li className="list-inline-item"><a href="#">Terms</a></li>
                            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                        </ul>
                        <p className="copyright">My MyFitnessPal © 2018</p>
                    </footer>
                </div>
                < /section> */}
            </div>
            {/* </div> */}

        </>
    )
}

export default HomePage