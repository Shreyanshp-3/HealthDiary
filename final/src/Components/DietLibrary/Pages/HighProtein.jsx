import { Box, Button, Card, CardBody, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { React, useEffect } from 'react'
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
import AOS from 'aos'
import 'aos/dist/aos.css';
import hp1 from './images/hp1.jpg';
import hp2 from './images/hp2.jpeg';
import hp3 from './images/hp3.jpeg';
import hp4 from './images/hp4.jpeg';
import hp5 from './images/hp5.jpeg';
import hp6 from './images/hp6.jpeg';


const HighProtein = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    })
  }, [])
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <Heading mb={4} fontSize='3.5rem'>High Protein Diet Features</Heading>
          <br />
          <Text fontSize='xl'>
            The articles below discuss Nutrition, Weight Control, Diabetes and provide valuable tips on using MyNetDiary apps for losing weight healthily.          </Text>

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
                src={hp1}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>If you are starting a help protein eating plan check out these 5 steps for success!</Heading>
                <Text>
                  Whether you are starting a heigh-protein eating plan for weight loss or to build a muscle mass,My health diary is here to help you.                </Text>
                {/* <Button size='md' colorScheme='purple' mt='24px'
                >
                  Read More !
                </Button> */}
                <a href="https://www.mynetdiary.com/get-started-on-high-protein-diet.html" target="_blank" rel="noopener noreferrer">

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
                src={hp2}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>What are protein powder pros and cons</Heading>
                <Text>
                  Learn about the types of protein powder and How to use them.
                </Text>
                <a href="https://www.mynetdiary.com/protein-powder-pros-and-cons.html" target="_blank" rel="noopener noreferrer">

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
                src={hp3}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Can high protein meals help you lose weight</Heading>
                <Text>
                  Here's what one study found.
                </Text>
                <a href="https://www.mynetdiary.com/get-started-on-high-protein-diet.html" target="_blank" rel="noopener noreferrer">

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
                src={hp4}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>The benefits of eating protein</Heading>
                <Text>
                  Learn about animal and plant based sources and how to make smart choices between them .                       </Text>
                <a href="https://www.mynetdiary.com/affordable-protein.html" target="_blank" rel="noopener noreferrer">

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
                src={hp5}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Meet your protein needs or muscle gain</Heading>
                <Text>
                  5 tips from a sports nutritionist for building and maintaining muscle.                </Text>
                <a href="https://www.mynetdiary.com/protein-needs-for-muscle-gain.htmlein-diet.html" target="_blank" rel="noopener noreferrer">

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
                src={hp6}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>5 Ingredients or less high protein snack ideas for weight loss</Heading>
                <Text>
                  Be a smart snacker with these tasty ideas.
                </Text>
                <a href="https://www.mynetdiary.com/easy-high-protein-snacks.html" target="_blank" rel="noopener noreferrer">

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

export default HighProtein