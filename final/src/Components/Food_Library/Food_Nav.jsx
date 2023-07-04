import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { CalendarIcon, CloseIcon,TimeIcon,ViewIcon,Search2Icon,SearchIcon, EditIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Food_Nav = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    })
  }, [])
  return (
    <>
      <List color="white" fontSize={{ base: "1.2rem", md: "1.4rem", xl: "1.2rem" }}

        pb="2rem" spacing={3} >
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"
        >
          <NavLink to="/FoodLibrary/Howto">
            <ListIcon as={QuestionOutlineIcon} color="white" />
            How to search
          </NavLink>
        </ListItem>
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/FoodLibrary/FoodNutrition">
            <ListIcon as={SearchIcon} color="white" />

            Food Nutrition Value
          </NavLink>
        </ListItem>
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/FoodLibrary/RecipeSearch ">
            <ListIcon as={EditIcon} color="white" />

            Recipes
          </NavLink>
        </ListItem>

        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/FoodLibrary/DietPlanGenerator">
            <ListIcon as={CalendarIcon} color="white" />
            Diet Plans
          </NavLink>
        </ListItem>
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/FoodLibrary/Dietplanner">
            <ListIcon as={EditIcon} color="white" />
            Custom Diet Plan
          </NavLink>
        </ListItem>
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
        // data-aos="fade-right"

        >
          <NavLink to="/FoodLibrary/CalorieTracker">
            <ListIcon as={TimeIcon} color="white" />
            Calorie Tracker
          </NavLink>
        </ListItem>
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
        // data-aos="fade-right"

        >
          <NavLink to="/FoodLibrary/GetCalories">
            <ListIcon as={ViewIcon} color="white" />
            Get Calories
          </NavLink>
        </ListItem>

      </List >

    </>
  )
}

export default Food_Nav