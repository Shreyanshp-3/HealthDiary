import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import { Grid, GridItem } from '@chakra-ui/react'



// for the navigation side bar
import Mhomepage from './Components/Homepage/Mhomepage';
import Dl_Navbar from './Components/DietLibrary/DietLib_Navbar/Dl_Navbar'

//for the navdata importing the links
import Homepage from './Components/Homepage/Homepage';
import Dl_Navdata from './Components/DietLibrary/DietLib_Navbar/Dl_Navdata';
import LowDiet from './Components/DietLibrary/Pages/LowDiet';
import KetoDiet from './Components/DietLibrary/Pages/KetoDiet';
import HighProtein from './Components/DietLibrary/Pages/HighProtein';
import LowFatdiet from './Components/DietLibrary/Pages/LowFatdiet';
import VeganDiet from './Components/DietLibrary/Pages/VeganDiet';
import Vegetarian from './Components/DietLibrary/Pages/Vegetarian';
// food libraries
import Food_Data from './Components/Food_Library/Food_Data';
import Food_Nav from './Components/Food_Library/Food_Nav';

import Howto from './Components/Food_Library/Pages/Howto';
import FoodNutrition from './Components/Food_Library/Pages/FoodNutrition';
import DietPlanner from './Components/Food_Library/Pages/DietPlanner';
import DietPlanGenerator from './Components/Food_Library/Pages/DietPlanGenerator';
import RecipeSearch from './Components/Food_Library/Pages/RecipeSearch';
import CalorieTracker from './Components/Food_Library/Pages/CalorieTracker';
import Getcalorie from './Components/Food_Library/Pages/Getcalorie';



// next pages
import SymptomPrediction from './Components/SymptomPrediction/SymptomPrediction';
import SymptomNav from './Components/SymptomPrediction/SymptomNav';
import Signup from './Components/Signuppage/Signup';
import ExerciseLibrary from './Components/ExerciseLibrary/ExerciseLibrary';
import ExerciseNav from './Components/ExerciseLibrary/ExerciseNav';
import Feedback from './Components/Feedback/Feedback';
import FeedbackNav from './Components/Feedback/FeedbackNav';


function App() {
    return (
        <>{/* this is the fixed navbar */}
            <Navbar />
            {/* <Navbar /> */}
            <div className='routes1'>

                <Grid templateColumns="repeat(6,1fr)" bg="white">

                    {/* this is the new navbar of the item list present in the columns */}
                    <GridItem
                        as="main"
                        colSpan={{ base: 6, lg: 2, xl: 1 }}
                        bg="purple.400"
                        minHeight={{ base: "20vh", lg: '40vh', xl: "100vh" }}
                        p={{ base: "3rem 3rem 0rem 3rem ", lg: "5rem 0rem 4rem 4rem", xl: "2rem" }}
                        width="100%"
                    >
                        <Routes>
                            <Route exact path='/' element={<Mhomepage />} />
                            <Route exact path='/DietLibrary' element={<Dl_Navbar />} />
                            {/* routes to the pages inside the Diet Library */}
                            <Route exact path='/DietLibrary/LowDiet' element={<Dl_Navbar />} />
                            <Route exact path='/DietLibrary/KetoDiet' element={<Dl_Navbar />} />
                            <Route exact path='/DietLibrary/HighProtein' element={<Dl_Navbar />} />
                            <Route exact path='/DietLibrary/LowFatdiet' element={<Dl_Navbar />} />
                            <Route exact path='/DietLibrary/VeganDiet' element={<Dl_Navbar />} />
                            <Route exact path='/DietLibrary/Vegetarian' element={<Dl_Navbar />} />

                            {/* routes to the pages inside the Food  Library */}
                            <Route exact path='/FoodLibrary' element={<Food_Nav />} />
                            <Route exact path='/FoodLibrary/Howto' element={<Food_Nav />} />
                            <Route exact path='/FoodLibrary/FoodNutrition' element={<Food_Nav />} />
                            <Route exact path='/FoodLibrary/Dietplanner' element={<Food_Nav />} />
                            <Route exact path='/FoodLibrary/DietPlanGenerator' element={<Food_Nav />} />
                            <Route exact path='/FoodLibrary/RecipeSearch' element={<Food_Nav />} />
                            <Route exact path='/FoodLibrary/CalorieTracker' element={<Food_Nav />} />
                            <Route exact path='/FoodLibrary/GetCalories' element={<Food_Nav />} />

                            {/* routes to the pages inside the symptom */}
                            <Route exact path='/SymptomPrediction/SymptomPrediction' element={<SymptomNav />} />

                            {/* that exercise page */}
                            <Route exact path='/ExerciseLibrary/ExerciseLibrary' element={<ExerciseNav />} />

                            {/* the feedback form */}
                            <Route exact path='/Feedback/Feedback' element={<FeedbackNav />} />
                        </Routes>
                    </GridItem>


                    {/* this is the new navdata for the items according to it */}
                    <GridItem
                        as="main"
                        colSpan={{ base: 6, lg: 4, xl: 5 }}
                        p="3rem"
                        width="100%"
                    >
                        <Routes>
                            <Route exact path='/' element={<Homepage />} />
                            <Route exact path='/DietLibrary' element={<Dl_Navdata />} />
                            {/* routes to the pages inside the Diet Library */}
                            <Route exact path='/DietLibrary/LowDiet' element={<LowDiet />} />
                            <Route exact path='/DietLibrary/KetoDiet' element={<KetoDiet />} />
                            <Route exact path='/DietLibrary/HighProtein' element={<HighProtein />} />
                            <Route exact path='/DietLibrary/LowFatdiet' element={<LowFatdiet />} />
                            <Route exact path='/DietLibrary/VeganDiet' element={<VeganDiet />} />
                            <Route exact path='/DietLibrary/Vegetarian' element={<Vegetarian />} />

                            {/* routes to the pages inside the Food  Library */}
                            <Route exact path='/FoodLibrary' element={<Food_Data />} />
                            <Route exact path='/FoodLibrary/Howto' element={<Howto />} />
                            <Route exact path='/FoodLibrary/FoodNutrition' element={<FoodNutrition />} />
                            <Route exact path='/FoodLibrary/DietPlanner' element={<DietPlanner />} />
                            <Route exact path='/FoodLibrary/DietPlanGenerator' element={<DietPlanGenerator />} />
                            <Route exact path='/FoodLibrary/RecipeSearch' element={<RecipeSearch />} />
                            <Route exact path='/FoodLibrary/CalorieTracker' element={<CalorieTracker />} />
                            <Route exact path='/FoodLibrary/GetCalories' element={<Getcalorie />} />


                            {/* routes to the pages inside the symptoms prediction pages */}
                            <Route exact path='/SymptomPrediction/SymptomPrediction' element={<SymptomPrediction />} />
                            <Route exact path='/Components/Signuppage' element={<Signup />} />

                            {/* that exercise page */}
                            <Route exact path='/ExerciseLibrary/ExerciseLibrary' element={<ExerciseLibrary />} />

                            {/* the feedback form */}
                            <Route exact path='/Feedback/Feedback' element={<Feedback />} />

                        </Routes>
                    </GridItem>
                </Grid>
            </div >
        </>
    );
}
export default App;