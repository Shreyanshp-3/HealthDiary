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
const Howto = () => {
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
                    <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>Goal Setting.</Heading>
                    <Text fontSize='l'>
                        Here is the detailed technique of goal setting.
                    </Text>
                    <UnorderedList fontSize='xl'>
                        <ListItem>We have to know want we want to achieve.</ListItem>
                        <ListItem>Like anything we want such as Low calorie diet, High protein diet, keto diet anything we want we can get and continue the whole journey with it.</ListItem>
                        <ListItem>By calculations and other data like BMI we can get the approx goal setting knowledge.</ListItem>
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
                    <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>Next Step!</Heading>
                    <Text fontSize='l'>
                        After the goal setting we need to follow the further steps.
                    </Text>
                    <UnorderedList fontSize='xl'>
                        <ListItem>Now once we have set the goal eg: We have to reduce 10 kgs in 10 days then we can work in that direction.</ListItem>
                        <ListItem>We can choose any kind of the diet by studying about them throughly.</ListItem>
                        <ListItem>After choosing it, we can go for the proper ingredient with their respective nutrition value.</ListItem>
                        <ListItem>So like we have the goal and the type of the diet.</ListItem>

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
                    <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>Getting the Desired Ingredients and Desired Recipes.</Heading>
                    <Text fontSize='l'>
                        Further steps after the diet selection
                    </Text>
                    <UnorderedList fontSize='xl'>
                        <ListItem>According to our nutrition value we search the ingredients that meet up the nutrition value.</ListItem>
                        <ListItem>After getting the ingredients we need to get the recipes according to that.</ListItem>

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
                    <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>Getting the Diet plan ready</Heading>
                    <Text fontSize='xl'>
                        Getting the plan instant ready to follow.
                    </Text>
                    <UnorderedList fontSize='xl'>
                        <UnorderedList>
                            <ListItem>After we get the desired Recipes of with desired items we can go further creating the whole diet.</ListItem>
                            <ListItem>Also we can search the direct plan for the whole day according to out need.</ListItem>
                            <ListItem>We can also add the recipes in the diet plan and change it according to our need.</ListItem>
                        </UnorderedList>
                    </UnorderedList>
                </Box>

            </GridItem>

        </Grid>
    )
}

export default Howto