import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Hide, Show, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos'

const steps = [
    { title: 'First', description: 'Set Goals' },
    { title: 'Second', description: 'Choose the correct way' },
    { title: 'Third', description: 'Set the limits' },
    { title: 'Forth', description: 'Get the plan' },
    { title: 'Fifth', description: 'Work on the plan' },
    { title: 'Sixth', description: 'Reach the Goal' },
    // { title: 'Third', description: 'Select Rooms' },
    // { title: 'Third', description: 'Select Rooms' },
]

const Mhomepage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false
        })
    }, [])
    const { activeStep } = useSteps({
        index: -1,
        count: steps.length,
    })


    return (
        <>
            <Hide above='lg'>
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem
                        // paddingBottom="4rem"
                        space="5"
                    >
                        <h2>
                            <AccordionButton _expanded={{ bg: 'white', color: 'black' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Homepage
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Homepage consist of four main sections:The Diet Library,Food Library,Exercise and Disease Predition


                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem
                        // paddingBottom="4rem"
                        space="5"
                    >
                        <h2>
                            <AccordionButton _expanded={{ bg: 'white', color: 'black' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Diet Library
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            The Diet Library provides users with information on various diet types.

                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem
                        // paddingBottom="4rem"
                        space="5"
                    >
                        <h2>
                            <AccordionButton _expanded={{ bg: 'white', color: 'black' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Food Library
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            The Food library offers food recipes and personalized diet plan based on users calorie need  and calorie consumption and a calorie tracker.


                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem
                        // paddingBottom="4rem"
                        space="5"
                    >
                        <h2>
                            <AccordionButton _expanded={{ bg: 'white', color: 'black' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Exercise
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            The Exercise section suggest and provide with a wide range of exercise depend on 2 type like the body part which you want to train or the equipment avaliability

                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem
                        // paddingBottom="4rem"
                        space="5"
                    >
                        <h2>
                            <AccordionButton _expanded={{ bg: 'white', color: 'black' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Disease and Symptom Prediction
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Disease Prediction section assists users in identifying potential health issues based on selected symptoms and provides relavant treatment recommendation.

                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem
                        // paddingBottom="4rem"
                        space="5"
                    >
                        <h2>
                            <AccordionButton _expanded={{ bg: 'white', color: 'black' }}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Business Details
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim

                        </AccordionPanel>
                    </AccordionItem>


                </Accordion>
            </Hide>
            <br />
            <br />




            <Hide below='lg'>

                <Stepper Stepper index={activeStep} orientation="vertical" height='100vh' gap='2' data-aos="fade-up"
                >
                    {
                        steps.map((step, index) => (
                            <Step key={index}
                            // mb="5rem"
                            >
                                <StepIndicator
                                    mb="30rem"

                                >
                                    <StepStatus
                                        complete={<StepIcon />}
                                        incomplete={<StepNumber />}
                                        active={<StepNumber />}

                                    />

                                </StepIndicator>

                                <Box flexShrink='1'
                                    data-aos="fade-up"
                                >
                                    <StepTitle>{step.title}</StepTitle>
                                    <StepDescription>{step.description}</StepDescription>
                                </Box>

                                <StepSeparator />
                            </Step>
                        ))
                    }
                </Stepper>
            </Hide>

        </>
    )
}

export default Mhomepage