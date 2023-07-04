import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AtSignIcon, CalendarIcon, CloseIcon, EditIcon, QuestionOutlineIcon, StarIcon } from "@chakra-ui/icons";
import AOS from 'aos'
import 'aos/dist/aos.css';
const DL_Navbar = () => {

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
          <NavLink to="/DietLibrary/LowDiet">
            <ListIcon as={CalendarIcon} color="white" />
            Low Diet
          </NavLink>
        </ListItem>
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/DietLibrary/HighProtein">
            <ListIcon as={QuestionOutlineIcon} color="white" />

            HighProtein
          </NavLink>
        </ListItem>
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/DietLibrary/KetoDiet">
            <ListIcon as={EditIcon} color="white" />

            Keto Diet
          </NavLink>
        </ListItem>

        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/DietLibrary/LowFatdiet">
            <ListIcon as={CloseIcon} color="white" />
            Low fat Diet
          </NavLink>
        </ListItem>
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/DietLibrary/VeganDiet">
            <ListIcon as={EditIcon} color="white" />

            Vegan Diet
          </NavLink>
        </ListItem>
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/DietLibrary/Vegetarian">
            <ListIcon as={StarIcon} color="white" />

            Vegetarian Diet
          </NavLink>
        </ListItem>
      </List >

    </>
  )
}

export default DL_Navbar