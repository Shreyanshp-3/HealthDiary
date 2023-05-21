import React from 'react'
import './Food_styles.css'

const Food_Data = () => {
  return (
    <>
      <div className='bodya'>

        <div className='row'>
        </div>
        <div className='col-lg-1'></div>
        <div className='outside col-lg-12'>
          <h2 className='datahead'>
            How to use
          </h2>
          <p className='datapara'>
            This is the overview of how it works or how to use this system get the brief information in the HOW TO USE! page
          </p>

          <br />
          <br />
          <div className='bullets'>
            <li className='datalist'>Here first is we gonna search the specific ingredients</li>
            <li className='datalist'>Then according to the nutrition value we gonna search its reciepe</li>
            <li className='datalist'>After getting the desired recipe we gonna get with that and if we want to  we can add that to the diet</li>
            <li className='datalist'>Or just copy the same name and get the recipe from the list</li>

          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className='outside col-lg-12'>
          <h2 className='datahead'>
            Food Search
          </h2>
          <p className='datapara'>
            This has all the food items in the datalist
          </p>

          <br />
          <br />
          <div className='bullets'>
            <li className='datalist'>All the food recipes with the ingredients we search and their respective nutrition value</li>
            <li className='datalist'>We can sort them according to th e ascending or descending order of the value present</li>
            <li className='datalist'>Their total 1118420 different types of nutrition value of different food present </li>
            <li className='datalist'>We later can use this data to get the desired amount of nutrition value in the desired food</li>
            <li className='datalist'> We also use the data to avoid the specific kind of food which stop us to reach the desired goal</li>
          </div>

        </div>
        <br />
        <br />
        <br />
        <br />
        <div className='outside col-lg-12'>
          <h2 className='datahead'>
            RecipeSearch
          </h2>
          <p className='datapara'>
            This mainly has 4 types
          </p>

          <br />
          <br />
          <div className='bullets'>
            <li className='datalist'>First where we can get all the recipe of any dish from the world and the tutorial about how to do it by searching the ingredients.</li>
            <li className='datalist'>Second where we can get all the recipe of the specific amount of calories in it</li>
            <li className='datalist'>Third is where we can manually enter the amount of nutrient value and get the recipe of different dishes of the searched ingredients</li>
            <li className='datalist'>Forth is like we get different types of dishes and like all the type like CUSINES, THAI, CHINESE, ITALIAN etc etc </li>
            {/* <li className='datalist'></li> */}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className='outside col-lg-12'>
          <h2 className='datahead'>
            Diet Planner
          </h2>
          <p className='datapara'>
            This mainly has 4 types
          </p>
          <br />
          <br />
          <div className='bullets'>
            <li className='datalist'>There are some default types of diets made for each type (default type)</li>
            <li className='datalist'>Next is like we can change the amount of value you wanna intake and get the Whole diet plan according do that</li>
            <li className='datalist'>Third is creating own diet plan and add them it the daily diet</li>
            <li className='datalist'>Forth is like editing the existing diet plan and then add some other points in it</li>
            <li className='datalist'>Last is like setting the goal for a specific time and try to follow the diet for that whole time to reach the goal</li>
          </div>
        </div>

      </div >
    </>
  )
}

export default Food_Data