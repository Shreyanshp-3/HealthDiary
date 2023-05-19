import { Route, Routes } from "react-router-dom";
import './Apps.css'

import HomePage from "./HomePage_Nav/HomePage";
import Navbar from "./HomePage_Nav/Navbar.jsx";

//the features page
import Features from './Pages/Features/Features_Nav.jsx';
import Features_Data from './Pages/Features/Features_Data.jsx';
//the feature page insider pages
import LowCal from './Pages/Features/Insiders/Low_calorie.jsx';
import HighProtein from './Pages/Features/Insiders/High_protien.jsx';
import KetoDiet from './Pages/Features/Insiders/Keto_diet.jsx';
import LowFat from './Pages/Features/Insiders/Low_fat.jsx';
import Vegan from './Pages/Features/Insiders/Vegan_Diet.jsx';
import Vegetarian from './Pages/Features/Insiders/Vegetatian_diet.jsx';


// the food page
import Food_Nav from "./Pages/Food/Food_Nav";
import Food_Data from "./Pages/Food/Food_Data";
// the food insider page
import FoodSearch from './Pages/Food/Insiders/FoodSearch';
import Howto from './Pages/Food/Insiders/Howto';
import Nutrition from './Pages/Food/Insiders/Nutrition';

function App() {
  return (
    <>
      {/* first navbar */}
      <div className="main_navbar">
        <Navbar />


        {/* second navbar */}
        <div className="routes1">
          <div className="menu">

            <Routes>
              <Route exact path="/" element={<HomePage />} />

              {/* features page */}
              <Route exact path="/features" element={<Features />} />
              <Route exact path="/features" element={<Features_Data />} />

              {/* food page */}
              <Route exact path="/food" element={<Food_Nav />} />
              <Route exact path="/food" element={<Food_Data />} />


              {/* to keep the same navbar inside the lowdiet page */}
              <Route exact path="/features/LowCal" element={<Features />} />
              <Route exact path="/features/HighProtein" element={<Features />} />
              <Route exact path="/features/KetoDiet" element={<Features />} />
              <Route exact path="/features/LowFat" element={<Features />} />
              <Route exact path="/features/Vegan" element={<Features />} />
              <Route exact path="/features/Vegetarian" element={<Features />} />

              {/* to keep the same navbar in the food page */}
              <Route exact path="/food/FoodSearch" element={<Food_Nav />} />
              <Route exact path="/food/Howto" element={<Food_Nav />} />
              <Route exact path="/food/Nutrition" element={<Food_Nav />} />


            </Routes>
          </div>


          {/* these are the inside pages */}


          <div className="menu2">
            <Routes>
              {/* features data insider pages */}
              <Route exact path="/features" element={<Features_Data />} />
              <Route exact path="/features/LowCal" element={<LowCal />} />
              <Route exact path="/features/HighProtein" element={<HighProtein />} />
              <Route exact path="/features/KetoDiet" element={<KetoDiet />} />
              <Route exact path="/features/LowFat" element={<LowFat />} />
              <Route exact path="/features/Vegan" element={<Vegan />} />
              <Route exact path="/features/Vegetarian" element={<Vegetarian />} />


              {/* features data for the food pages */}
              <Route exact path="/food" element={<Food_Data />} />
              <Route exact path="/food/FoodSearch" element={<FoodSearch />} />
              <Route exact path="/food/Howto" element={<Howto />} />
              <Route exact path="/food/Nutrition" element={<Nutrition />} />
            </Routes>

          </div>

        </div>
      </div>




    </>
  );
}

export default App;
