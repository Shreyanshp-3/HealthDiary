import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Center,
    Grid,
    GridItem,
    Spinner,
} from '@chakra-ui/react';

const App = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [calories, setCalories] = useState('');
    const [servingSize, setservingSize] = useState('');

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        fetch(
            `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${query}`,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '78153448ffmshda5b4bb48d8b3fep198e8fjsn0fd2cfb16dca',
                    'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com',
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data[0].serving_size_g)
                setCalories(data[0].calories ? data[0].calories.toString() : 'Not Found');
                setservingSize(data[0].serving_size_g ? data[0].serving_size_g.toString() : 'Not Found');
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    return (
        <ChakraProvider>
            <Box p={8}>
                <Center>
                    <Heading as="h1" mb={4}>
                        Get Calories Information
                    </Heading>
                </Center>
                <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={8}>
                    <GridItem>
                        <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                            <form onSubmit={handleSubmit}>
                                <FormControl mb={4}>
                                    <FormLabel>Ingredient or Food Item</FormLabel>
                                    <Input type="text" value={query} onChange={handleQueryChange} />
                                </FormControl>
                                <Button colorScheme="teal" type="submit" mt={4}>
                                    Get Calories
                                </Button>
                            </form>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                            {loading ? (
                                <Center h="100px">
                                    <Spinner size="lg" />
                                </Center>
                            ) : (
                                <Text fontSize="lg">
                                    Calories: {calories}
                                    <br/>
                  Serving Size: {servingSize}
                                </Text>
                   

                            )}
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </ChakraProvider>
    );
};

export default App;
