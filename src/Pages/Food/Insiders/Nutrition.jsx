import React from 'react'
import './F_allstyles.css'
import '../Food_styles.css'

import { useNavigate } from 'react-router-dom'



import one from './Images/newfirst.jpeg';
import two from './Images/new2.jpg';
import three from './Images/new3.webp';
import four from './Images/new4.jpg';


const Nutrition = () => {
  const navgiate  = useNavigate();

  return (
    <>
      <div className='bodya'>
        <div className='datahead'>
          Any kind of recipes we need.
        </div>
        <div className='datap'>
          So we believe mainly in 4 types of Recipes for proper diet plan of any type
        </div>
        <br />
        <div className='datap'>
          Here the types so searching recipes are -
        </div>
        <li className='datap'>All Recipes in the world</li>
        <li className='datap'>All Recipes with the given amount of Calories</li>
        <li className='datap'>All Recipes with the given amount of Proteins</li>
        <li className='datap'>Recipes with types like THAI, CHINESE, ITALIAN, KOREAN etc </li>

        <br></br>
        <br></br>
        <br></br>

      </div>

      <div className='charts'>

        <div className='row'>
          <div className='col-lg-5'>
            <div class="card cardi border-0" >
              <img class="card-img-top imgc" src={one} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Any Recipes from whole world</h5>
                <p class="card-text">Here we can get any recipes from the world just by its Ingredients with whole Tutorial</p>
                {/* <a href="" target="_blank" class="btn btn-outline-primary">Recipes</a> */}
                <h4 className='tab2 btn btn-outline-primary' onClick={() => navgiate(`/food/Nutrition/Rone`)}>Recipes</h4>

              </div>
            </div>
          </div>
          <div className='col-lg-2'></div>
          <div className='col-lg-5'>
            <div class="card cardi border-0" >
              <img class="card-img-top imgc" src={two} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Any Recipes with the specific amount of calories in it</h5>
                <p class="card-text">Here we can get any recipes from the world just by its Ingredients and mentioning the amount of calorie with whole Tutorial.</p>
                <a href="" class="btn btn-outline-primary">Go somewhere</a>
              </div>
            </div>
          </div>


        </div>
        <div className='row'>
          <div className='col-lg-5'>
            <div class="card cardi border-0">
              <img class="card-img-top imgc" src={three} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Any Recipes with the specific amount of protein in it</h5>
                <p class="card-text">Here we can get any recipes from the world just by its Ingredients and mentioning the amount of calorie with whole Tutorial.</p>
                <a href="#" class="btn btn-outline-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-lg-2'></div>
          <div className='col-lg-5'>
            <div class="card cardi border-0">
              <img class="card-img-top imgc" src={four} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Recipes with their TYPES</h5>
                <p class="card-text">Here we can get any recipes from the world just by its Type (THAI, CHINESE, ITALIAN....) with whole Tutorial..</p>
                <a href="#" class="btn btn-outline-primary">Go somewhere</a>
              </div>
            </div>
          </div>


        </div>
      </div>




      {/* to get the recipe page in a react page  */}
    </>
  )
}

export default Nutrition