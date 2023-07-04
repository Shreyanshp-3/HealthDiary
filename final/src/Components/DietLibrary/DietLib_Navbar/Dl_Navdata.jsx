import { Box, Button, Card, CardBody, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import m1 from '../images/m1.jpg';
import m2 from '../images/m2.jpeg';
import m3 from '../images/m3.jpeg';
import m4 from '../images/m4.jpeg';
import m5 from '../images/m5.jpeg';
import m6 from '../images/m6.jpeg';
import m7 from '../images/m7.jpeg';
import m8 from '../images/m8.jpeg';
import m9 from '../images/m9.jpeg';
import m10 from '../images/m10.jpeg';
import m11 from '../images/m11.jpeg';
import m12 from '../images/m12.jpeg';
import m13 from '../images/m13.jpeg';
import m14 from '../images/m14.jpeg';

const Dl_Navdata = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false
        })
    }, [])
    return (
        <Grid templateColumns="repeat(6,1fr)" bg="white">
            <GridItem
                data-aos="fade-right"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "0rem", md: "3rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize='3.5rem'>Diet Libraries</Heading>
                    <br />
                    <Text fontSize='xl'>
                        This page includes all the features and Libraries of different types of Diets present.There are mainly 6 types for health lifestyle.Depending on them the characteristic. Get All the detailed Information about the Diets Given Below and Choose the perfect way to go with the diet.The articles below discuss Nutrition, Weight Control, Diabetes and provide valuable tips for losing weight healthily. </Text>

                </Box>
            </GridItem>

            {/* the side heading of the tabel */}
            <GridItem
                data-aos="fade-right"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "0rem", md: "3rem", xl: "3rem" }}
            >
                <br />
                <br />
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize='3rem'> Planning Weight, Calories & Nutrients</Heading>

                </Box>
            </GridItem>

            {/*first three cards  */}
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m1}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Planning Weight & calories</Heading>
                                <Text>
                                    Discover how calories planning works at My Fitness App to help your weight goal.
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m2}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Develop a personalized nutrition plan</Heading>
                                <Text>
                                    Learn how to customize you targets and track more than 50000 nutrients with My fitness .
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>


            {/* the side heading of the tabel */}
            <GridItem
                data-aos="fade-right"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "0rem", md: "3rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize='3rem'> Basics of Tracking</Heading>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m3}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>6 Reasons using a food and exercise tracker app helps with weight loss</Heading>
                                <Text>
                                    This article discuss the many benefits of keeping a food diary.
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m4}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Measuring and Estimating portion sizes</Heading>
                                <Text>
                                    Practical tips on portion control including how to measure and estimate portion size.
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m5}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Food search tips: Basic and staple foods</Heading>
                                <Text>
                                    Learn how to leverage MY FItNESS food database, making it which and easy to log your food.
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m6}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Import recipies to your My FITNESS account from whole world</Heading>
                                <Text>
                                    Do you love to cook but little time to enter all the recipie ingredients for tracking? My FITNESS make it easy to import recipes from the web.
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>


            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* the side heading of the tabel */}
            <GridItem
                data-aos="fade-right"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "0rem", md: "3rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize='3rem'> Weight loss and Maintenance</Heading>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m7}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>4 Tips for a Choosing a Weight Loss Diet That works for you</Heading>
                                <Text>
                                    Tips on how to select a diet that is safe and works well for you.
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m8}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Hidden Cues To Eating</Heading>
                                <Text>
                                    Learn what drivers us to overeat and what you can do about it .
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m9}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Why am I Not Losing Weight</Heading>
                                <Text>
                                    This article explains why you might have stopped losing weight and offers tips for breaking the plateau.
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m10}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Weight Loss Maintenance.</Heading>
                                <Text>
                                    Congratulations, you have achieved your goal, Now what do you do? .
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* the side heading of the tabel */}
            <GridItem
                data-aos="fade-right"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "0rem", md: "3rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize='3rem'> Nutrition Basics</Heading>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m11}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Dietary Facts</Heading>
                                <Text>
                                    Learn about different types of fats and how to make healthier food choices
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m12}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Carbohydrates: Starch,sugar and fiber</Heading>
                                <Text>
                                    This article describes what Carbohydrates are and how to make healthier carb choices.
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m3}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>The benefits of eating protein.</Heading>
                                <Text>
                                    Learn about animal and plant sources of protein and how teo make smart choices if you are trying to lose .
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
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
                                src={m3}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Foods for food Nutrition</Heading>
                                <Text>
                                    Learn how to customize you targets and track more than 50000 nutrients with My fitness .
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>

            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* the side heading of the tabel */}
            <GridItem
                data-aos="fade-right"
                className='hidden'
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 6 }}
                p={{ base: "0rem", md: "3rem", xl: "3rem" }}
            >
                <br />
                <br />
                <Box maxW='64rem'>
                    <Heading mb={4} fontSize='3rem'> Healthy Eating and Exercise</Heading>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'>
                    <Card maxW='sm'
                                            maxH="40rem"

                        bg="white"
                        borderTop="8px"
                        borderColor="purple.400"
                    >
                        <CardBody>
                            <Image
                                src={m13}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>What is the Food Grade?</Heading>
                                <Text>
                                    This article explains what it is and how to use it to make healthier and food choices
                                </Text>
                                <Button size='md' colorScheme='purple' mt='24px'
                                >
                                    Create a free account
                                </Button>
                            </Stack>
                        </CardBody>

                    </Card>

                </Box>
            </GridItem>
            <GridItem
                className='hidden'
                data-aos="fade-up"
                as="main"
                colSpan={{ base: 6, lg: 6, xl: 3 }}
                p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
            >
                <Box maxW='64rem'
                >
                    <Card maxW='sm'
                        // maxH="40rem"
                        bg="white"
                    borderTop="8px"
                    borderColor="purple.400"
                    >
                    <CardBody>
                        <Image
                            src={m14}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Carbohydrates: Starch,sugar and fiber</Heading>
                            <Text>
                                This article describes what Carbohydrates are and how to make healthier carb choices.
                            </Text>
                            <Button size='md' colorScheme='purple' mt='24px'
                            >
                                Create a free account
                            </Button>
                        </Stack>
                    </CardBody>

                </Card>

            </Box>
        </GridItem>

        </Grid >
    )
}

export default Dl_Navdata