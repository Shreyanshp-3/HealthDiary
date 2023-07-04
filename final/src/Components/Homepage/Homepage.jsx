import { Box, Button, Card, CardBody, Center, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import h1 from './Images/first_image_food.webp';
import h2 from './Images/secongimg.webp';
import './Homepage.css';
import c1 from './Images/learn.svg';
import c2 from './Images/22222.svg';
import c3 from './Images/33333.svg';

import r1 from './Images/r1.webp';
import r2 from './Images/r2.webp';
import r3 from './Images/r3.webp';

import AOS from 'aos'
import 'aos/dist/aos.css';
import ColorModeToggle from './ColorModeToggle';
import Rough from '../Rough/Rough';




const Homepage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false
        })
    }, [])

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });


    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));



    return (
        <Grid templateColumns="repeat(6,1fr)" bg="white">


            {/* <GridItem
                data-aos="fade-up"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 8rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <ColorModeToggle />
                </Box>

            </GridItem> */}
            <GridItem
                data-aos="fade-up"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 3, xl: 3 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 8rem", xl: "3rem" }}
            >
                <Box maxW='32rem'>
                    <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>Good Health Starts with What you eat !</Heading>
                    <Text fontSize='xl'>
                        Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with MyFitness.</Text>

                    <Button size='md' colorScheme='purple' mt='24px'
                    >
                        Create a free account

                    </Button>
                    {/* <ColorModeToggle /> */}

                </Box>

            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 3, xl: 3 }}
                p={{ base: "0rem", md: "1rem 3rem 1rem 6rem", xl: "3rem" }}
                m={{ base: "0rem 2rem 0rem 0rem", lg: "0rem", xl: "0rem" }}
            >
                <Box maxW={{ base: "26rem", md: "30rem", xl: "26rem" }}>
                    <center>
                        <img className="header-img" src={h1} alt="image_food" />
                    </center>
                </Box>
            </GridItem>


            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 3, xl: 3 }}
                p={{ base: "0rem", md: "1rem 3rem 1rem 6rem", xl: "3rem" }}
                m={{ base: "0rem 2rem 0rem 0rem", lg: "0rem", xl: "0rem" }}
            >
                <Box maxW={{ base: "26rem", md: "30rem", xl: "26rem" }}>
                    <center>
                        <img className="header-img" src={h2} alt="image_food" />
                    </center>
                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 3, xl: 3 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 8rem", xl: "3rem" }}
            >
                <Box maxW='32rem'>
                    <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>Log from over Different Variety of foods.</Heading>
                    <Text fontSize='xl'>
                        Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with MyFitness.</Text>
                    {/* <br/> */}
                    <Button size='md' colorScheme='purple' mt='24px'>
                        Create a free accoun
                    </Button>
                </Box>
            </GridItem>

            {/* the third row of the column */}


            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 8rem", xl: "3rem" }}
            >
                <br />
                <br />

                <Box maxW='64rem'>
                    <Heading size='lg' fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>
                        The Tools for Your Goals
                    </Heading>

                    <Center>
                        <Text fontSize='xl'>
                            Trying to lose weight, tone up, lower your bmi, or invest in your overall health? Track your daily meals and calories? We give you the right features to get there.
                        </Text>
                    </Center>

                </Box>
            </GridItem>

            {/* THE CARD ITEM AFTER THE HEADING */}
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 2 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Card maxW='sm'
                        bg="white"
                        borderTop="8px"
                        borderColor="purple.400"
                    >
                        <CardBody>
                            <Image
                                src={c1}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Learn. Track. Improve.</Heading>
                                <Text>
                                    Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.

                                </Text>

                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 2 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Card maxW='sm'
                        bg="white"
                        borderTop="8px"
                        borderColor="purple.400">
                        <CardBody>
                            <Image
                                src={c2}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Logging Simplified.</Heading>
                                <Text>
                                    Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking. Save the Daily data
                                </Text>

                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 2 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Card maxW='sm'
                        bg="white"
                        borderTop="8px"
                        borderColor="purple.400">
                        <CardBody>
                            <Image
                                src={c3}
                                alt='Green'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Stay Motivated.</Heading>
                                <Text>
                                    Join the World's Largest Fitness Community for advice, tips, and propper support. Keep yourself always motivated.
                                </Text>

                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>

            {/* that 3rd heading before the card */}
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 5rem", xl: "3rem" }}
            >
                <br />
                <br />
                <Box maxW='64rem'>
                    <Center>
                        <Heading fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>Recipes and Inspiration</Heading>
                    </Center>
                    <Center>
                        <Text fontSize='xl'>
                            Get nutritionist approved recipes and motivational workout tips from MyHealthDiary expert. Get their goals achieved, Get inspired for the journey ahead
                        </Text>
                    </Center>

                </Box>
            </GridItem>
            {/* THE CARD ITEM AFTER THE HEADING */}
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 2 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Card maxW='sm'
                        bg="white"
                        borderTop="8px"
                        borderColor="purple.400"
                    >
                        <CardBody>
                            <Image
                                src={r1}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Eat What you know!</Heading>
                                <Text>
                                    Rather than eating something told by other peoples do a proper research and then add it to the diet
                                </Text>

                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 2 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Card maxW='sm'
                        bg="white"
                        borderTop="8px"
                        borderColor="purple.400">
                        <CardBody>
                            <Image
                                src={r2}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Suitable food</Heading>
                                <Text>
                                    Check what all is Suitable for your Health. Add all the essentials in the diet plans and follow it.
                                </Text>

                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 2 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Card maxW='sm'
                        bg="white"
                        borderTop="8px"
                        borderColor="purple.400">
                        <CardBody>
                            <Image
                                src={r3}
                                alt='Green'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Expert Advise</Heading>
                                <Text>
                                    If you don't know what to do further, you can just take the expert advise and follow it to reach the goal
                                </Text>

                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            {/* that 4th heading before the card */}
            <br />
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "1rem", lg: "2rem", xl: "3rem" }}
            >
                <br />
                <br />
                <Box maxW='64rem'>
                    <Center>
                        <Heading m={2} fontSize={{ base: "2.3rem", lg: "2rem", xl: "4rem" }}>All and About</Heading>
                    </Center>
                    <br />
                    <Center>
                        <Text fontSize={{ base: "l", lg: "lg", xl: "xl" }}>
                            MyHealthDiary is one of the best weight loss apps and fitness apps, helping nearly hundreds members reach their nutrition and fitness goals every year. Members use it as a calories tracker and calorie counter to log their foods, and take advantage of the app’s food database that contains over 14 million foods. It’s not just a free calorie counter app — it’s also the best calorie app, fitness app, diseases recognition for people who are looking to take back control of their health and fitness.                        </Text>
                    </Center>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                p={0}
                m={0}
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                // p={{ base: "1rem", lg: "2rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Rough />

                </Box>
            </GridItem>

        </Grid >
    )
}

export default Homepage