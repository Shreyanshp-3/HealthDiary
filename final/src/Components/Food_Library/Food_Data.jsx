import { Box, Button, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'

import AOS from 'aos'
import 'aos/dist/aos.css';
const Food_Data = () => {
    return (
        <Grid templateColumns="repeat(6,1fr)" bg="white">
            <GridItem
                data-aos="fade-up"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 8rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>•Introduciton •Nutrition  •Recipes</Heading>
                    <Text fontSize='xl'>
                        • This page includes all the Information about the recipes and their ingredients.Which ingredients in which recipes contains what amount of the nutrition value.
                    </Text>
                    <Text fontSize='xl'>
                        • These also include how to use the information according to the need.
                    </Text>
                    <Text fontSize='xl'>
                        • This has the different kind of recipes as per the information given to it.
                    </Text>
                    <Text fontSize='xl'>
                        • All the recipes are sorted in a Unique way that gets easier to access them according to the need.
                    </Text>

                    <Button size='md' colorScheme='purple' mt='24px'
                    >
                        Create a free account

                    </Button>
                    {/* <ColorModeToggle /> */}

                </Box>

            </GridItem>
            <GridItem
                data-aos="fade-up"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 8rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>How to use</Heading>
                    <Text fontSize='xl'>
                        This is the overview of how it works or how to use this system get the brief information in the HOW TO USE! page .
                    </Text>
                    <UnorderedList fontSize='xl'>
                        <ListItem>Here first is we gonna search the specific ingredients</ListItem>
                        <ListItem>Then according to the nutrition value we gonna search its reciepe</ListItem>
                        <ListItem>After getting the desired recipe we gonna get with that and if we want to we can add that to the diet</ListItem>
                        <ListItem>Or just copy the same name and get the recipe from the list</ListItem>
                    </UnorderedList>


                </Box>

            </GridItem>
            <GridItem
                data-aos="fade-up"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 8rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>Food Search</Heading>
                    <Text fontSize='xl'>
                        This has all the food items in the datalist.
                    </Text>
                    <UnorderedList fontSize='xl'>
                        <ListItem>All the food recipes with the ingredients we search and their respective nutrition value</ListItem>
                        <ListItem>We can sort them according to the ascending or descending order of the value present</ListItem>
                        <ListItem>Their total 1118420 different types of nutrition value of different food present </ListItem>
                        <ListItem>We later can use this data to get the desired amount of nutrition value in the desired food</ListItem>
                        <ListItem> We also use the data to avoid the specific kind of food which stop us to reach the desired goal</ListItem>
                    </UnorderedList>


                </Box>

            </GridItem>
            <GridItem
                data-aos="fade-up"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 8rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>Recipe Search</Heading>
                    <Text fontSize='xl'>
                        This mainly has 4 types
                    </Text>
                    <UnorderedList fontSize='xl'>
                        <ListItem>First where we can get all the recipe of any dish from the world and the tutorial about how to do it by searching the ingredients.</ListItem>
                        <ListItem>Second where we can get all the recipe of the specific amount of calories in it.</ListItem>
                        <ListItem>Third is where we can manually enter the amount of nutrient value and get the recipe of different dishes of the searched ingredients </ListItem>
                        <ListItem> Forth is like we get different types of dishes and like all the type like CUSINES, THAI, CHINESE, ITALIAN etc etc </ListItem>
                    </UnorderedList>
                </Box>

            </GridItem>
            <GridItem
                data-aos="fade-up"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 8rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>Diet Planner</Heading>
                    <Text fontSize='xl'>
                        This mainly has 4 types
                    </Text>
                    <UnorderedList fontSize='xl'>
                        <UnorderedList>
                            <ListItem>There are some default types of diets made for each type (default type)</ListItem>
                            <ListItem>Next is like we can change the amount of value you wanna intake and get the Whole diet plan according do that</ListItem>
                            <ListItem>Third is creating own diet plan after studying from Diet library </ListItem>
                            <ListItem>Forth is like editing the existing diet plan and then add some other points in it</ListItem>
                            <ListItem>Last is like setting the goal for a specific time and try to follow the diet for that whole time to reach the goal</ListItem>
                        </UnorderedList>
                    </UnorderedList>
                </Box>

            </GridItem>

        </Grid>
    )
}

export default Food_Data