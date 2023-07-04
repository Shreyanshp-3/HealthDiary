import { Box, Button, Card, CardBody, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import lf1 from './images/lf1.jpg';
import lf2 from './images/lf2.jpeg';
import lf3 from './images/lf3.jpeg';
import lf4 from './images/lf4.jpeg';
import lf5 from './images/lf5.jpeg';
import lf6 from './images/lf6.jpeg';
const LowFatdiet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <Heading mb={4} fontSize='3.5rem'>Low Fat Diet Features</Heading>
          <br />
          <Text fontSize='xl'>
            The articles below discuss Nutrition, Weight Control, Diabetes and provide valuable tips for losing weight healthily.
          </Text>

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
          <Heading mb={4} fontSize='3rem'> Getting Started</Heading>

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
                src={lf1}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Starting a low fat eating plan? 6 steps for success</Heading>
                <Text>
                  Whether you are following a low fat diet for weight loss, My health diary is here to help you...
                </Text>

                <a href="https://www.mynetdiary.com/low-fat-eating-plan.html" target="_blank" rel="noopener noreferrer">

                  <Button colorScheme='purple'>Read More!</Button>
                </a>


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
                src={lf2}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Dietary fats</Heading>
                <Text>
                  Learn about the different types of fats and how to make healthier food choices.
                </Text>
                <a href="https://www.mynetdiary.com/dietary-fats.html" target="_blank" rel="noopener noreferrer">

                  <Button colorScheme='purple'>Read More!</Button>
                </a>
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
                src={lf3}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Plate method for meal planning </Heading>
                <Text>
                  Try this fool proof method for limiting extra fats and calories.
                </Text>
                <a href="https://www.mynetdiary.com/simple-n-healthful-meal-planner-plate-method.html" target="_blank" rel="noopener noreferrer">

                  <Button colorScheme='purple'>Read More!</Button>
                </a>


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
                src={lf4}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Want to cook without oil? How to ditch the oil for every cooking method</Heading>
                <Text>
                  Believe or not, its not hard to cook without oil.Here are out best tips and tricks                </Text>
                <a href="https://www.mynetdiary.com/cook-without-oil.html" target="_blank" rel="noopener noreferrer">

                  <Button colorScheme='purple'>Read More!</Button>
                </a>


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
                src={lf5}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Say no to bland food</Heading>
                <Text>
                  Try these tips for cooking with herbs and spices.
                </Text>
                <a href="https://www.mynetdiary.com/is-your-food-always-bland-you-may-be-missing-the-trick-with-these-spices-and-herbs.html" target="_blank" rel="noopener noreferrer">

                  <Button colorScheme='purple'>Read More!</Button>
                </a>


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
                src={lf6}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>How to make healthy home cooking easier</Heading>
                <Text>
                  Set up your kitchen for success!
                </Text>
                <a href="https://www.mynetdiary.com/set-yourself-up-for-healthy-cooking.html" target="_blank" rel="noopener noreferrer">

                  <Button colorScheme='purple'>Read More!</Button>
                </a>

              </Stack>
            </CardBody>

          </Card>

        </Box>
      </GridItem>

    </Grid>
  )
}

export default LowFatdiet