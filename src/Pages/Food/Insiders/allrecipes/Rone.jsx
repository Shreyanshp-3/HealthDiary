import React from 'react'
// import './F_allstyles.css'
import './indi.css'

const Rone = () => {
  let searchBtn = document.getElementById('search-btn');
  let mealList = document.getElementById('meal');
  const mealDetailsContent = document.querySelector('.meal-details-content');
  const recipeCloseBtn = document.getElementById('recipe-close-btn');

  // event listeners
  if (searchBtn !== null)
    searchBtn.addEventListener('click', getMealList);
  if (mealList != null)

    mealList.addEventListener('click', getMealRecipe);
  if (recipeCloseBtn != null)
    recipeCloseBtn.addEventListener('click', () => {
      mealDetailsContent.parentElement.classList.remove('showRecipe');
    });


  // get meal list that matches with the ingredients
  function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
      .then(response => response.json())
      .then(data => {
        let html = "";
        if (data.meals) {
          data.meals.forEach(meal => {
            html += `
                      <div class = "meal-item" data-id = "${meal.idMeal}">
                          <div class = "meal-img">
                              <img src = "${meal.strMealThumb}" alt = "food">
                          </div>
                          <div class = "meal-name">
                              <h3>${meal.strMeal}</h3>
                              <a href = "#" class = "recipe-btn">Get Recipe</a>
                          </div>
                      </div>
                  `;
          });
          mealList.classList.remove('notFound');
        } else {
          html = "Sorry, we didn't find any meal!";
          mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
      });
  }


  // get recipe of the meal
  function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
      let mealItem = e.target.parentElement.parentElement;
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
  }

  // create a modal
  function mealRecipeModal(meal) {
    console.log(meal);
    meal = meal[0];
    let html = `
          <h2 class = "recipe-title">${meal.strMeal}</h2>
          <p class = "recipe-category">${meal.strCategory}</p>
          <div class = "recipe-instruct">
              <h3>Instructions:</h3>
              <p>${meal.strInstructions}</p>
          </div>
          <div class = "recipe-meal-img">
              <img src = "${meal.strMealThumb}" alt = "">
          </div>
          <div class = "recipe-link">
              <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
          </div>
      `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
  }
  return (
    <>

      <div className="bodyr">
        <h2 className='title'>
          RECIPES!

        </h2>
        <blockquote>
          Search any Recipes around the world and get the It with whole tutorial.
        </blockquote>

        {/* <div class="container"> */}
        <div class="meal-wrapper">
          <div class="meal-search">
            <h2 class="title">Find Meals For Your Ingredients</h2>
            <blockquote>Real food doesn't have ingredients, real food is ingredients.<br />
              <cite>- Jamie Oliver</cite>
            </blockquote>

            <div class="meal-search-box">
              <input type="text" class="search-control" placeholder="Enter an ingredient" id="search-input" />
              <button type="submit" class="search-btn btn" id="search-btn">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div class="meal-result">
            <h2 class="title">Your Search Results:</h2>
            <div id="meal">

            </div>
          </div>
          <div class="meal-details">
            {/* <!-- recipe close btn --> */}
            <button type="button" class="btn recipe-close-btn" id="recipe-close-btn">
              <i class="fas fa-times"></i>
            </button>
            {/* <!-- meal content --> */}
            <div class="meal-details-content">

            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default Rone