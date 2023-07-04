import { Box, Button, Heading, Input, Text, useBreakpointValue } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Feedback = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    })
  }, [])

  const formWidth = useBreakpointValue({ base: '110%', md: '68%' });

  return (
    <Box maxW='64rem' px={4} mx="auto">
      <Heading mb={4} fontSize='3.5rem' textAlign="center">Feedback Form</Heading>
      <Text fontSize='xl' textAlign="center">
        All feedback is welcome
      </Text>

      <Box mt={-20} className='formss'>
        <form
          action="https://formspree.io/f/mwkdeyky"
          method="POST"
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            w={formWidth}
            p={8}
            display="flex"
            flexDir="column"
            gap={4}
            boxShadow="0px 5px 20px rgba(0,0,0,0.3)"
          >
            <Text
              color="blackAlpha.700"
              textAlign="center"
              fontSize="20px"
              fontWeight="600"
              mb={2}
            >
              Feedback Form
            </Text>
            <Input
              type="text"
              color="blackAlpha.600"
              outline={0}
              boxShadow="0px 5px 20px rgba(0,0,0,0.009)"
              _focus={{
                boxShadow: "0px 5px 20px rgba(0,0,0,0.11)",
                border: "none",
              }}
              placeholder="Enter your name"
            />
            <Input
              type="email"
              name="email"
              color="blackAlpha.600"
              outline={0}
              boxShadow="0px 5px 20px rgba(0,0,0,0.009)"
              _focus={{
                boxShadow: "0px 5px 20px rgba(0,0,0,0.11)",
                border: "none",
              }}
              placeholder="Enter your Email"
            />
            <Input
              as="textarea"
              name="message"
              color="blackAlpha.600"
              outline={0}
              boxShadow="0px 5px 20px rgba(0,0,0,0.009)"
              _focus={{
                boxShadow: "0px 5px 20px rgba(0,0,0,0.11)",
                border: "none",
              }}
              placeholder="Enter your Feedback"
            />

            <Button
              variant="ghost"
              type="submit"
              color="blackAlpha.600"
              colorScheme="black"
            >
              Send
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Feedback;
