import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Center,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Divider,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const App = () => {


  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [history, setHistory] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [dailyLimit, setDailyLimit] = useState(2000);

  useEffect(() => {
    // Load history from local storage on component mount
    const storedHistory = localStorage.getItem('calorieHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    // Save history to local storage whenever it changes
    localStorage.setItem('calorieHistory', JSON.stringify(history));
  }, [history]);

  const handleFoodNameChange = (e) => {
    setFoodName(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foodName.trim() === '' || calories === '') {
      return;
    }

    const newEntry = {
      foodName,
      calories: parseInt(calories),
      date: new Date().toLocaleDateString(),

    };

    setHistory([...history, newEntry]);
    setFoodName('');
    setCalories('');
  };

  const handleDeleteConfirmation = (index) => {
    setDeleteIndex(index);
    setIsDeleteAlertOpen(true);
  };

  const handleDeleteCancel = () => {
    setDeleteIndex(null);
    setIsDeleteAlertOpen(false);
  };

  const handleDelete = () => {
    const updatedHistory = [...history];
    updatedHistory.splice(deleteIndex, 1);
    setHistory(updatedHistory);
    setIsDeleteAlertOpen(false);
  };

  const getTotalCalories = () => {
    let totalCalories = 0;
    history.forEach((entry) => {
      totalCalories += entry.calories;
    });
    return totalCalories;
  };

  const getExceededCalories = () => {
    const totalCalories = getTotalCalories();
    const exceededCalories = totalCalories - dailyLimit;
    return exceededCalories > 0 ? exceededCalories : 0;
  };

  const getRemainingCalories = () => {
    const totalCalories = getTotalCalories();
    const remainingCalories = dailyLimit - totalCalories;
    return remainingCalories > 0 ? remainingCalories : 0;
  };

  const isCalorieLimitExceeded = () => {
    const totalCalories = getTotalCalories();
    return totalCalories > dailyLimit;
  };

  const getCaloriesByDay = () => {
    const caloriesByDay = {};
    history.forEach((entry) => {
      const { date, calories } = entry;
      if (caloriesByDay[date]) {
        caloriesByDay[date] += calories;
      } else {
        caloriesByDay[date] = calories;
      }
    });
    return caloriesByDay;
  };

  return (
    <ChakraProvider>
      <Box p={8}>
        <Center>
          <Heading as="h1" mb={4}>
            Calorie Tracker
          </Heading>
        </Center>
        <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={8}>
          <GridItem>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <form onSubmit={handleSubmit}>
                <FormControl mb={4}>
                  <FormLabel>Food Name</FormLabel>
                  <Input type="text" value={foodName} onChange={handleFoodNameChange} />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Calories</FormLabel>
                  <Input type="number" value={calories} onChange={handleCaloriesChange} />
                </FormControl>
                <Button colorScheme="teal" type="submit" mt={4}>
                  Add Food
                </Button>
              </form>
            </Box>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md" mt={4}>
              <FormControl mb={4}>
                <FormLabel>Daily Calorie Limit</FormLabel>
                <Input
                  type="number"
                  value={dailyLimit}
                  onChange={(e) => setDailyLimit(parseInt(e.target.value))}
                />
              </FormControl>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Today's Calorie Summary
              </Text>
              <Divider mb={4} />
              <Stack spacing={2}>
                <Accordion allowToggle>
                  {Object.entries(getCaloriesByDay()).map(([date, totalCalories]) => (
                    <AccordionItem key={date}>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {date}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {history
                          .filter((entry) => entry.date === date)
                          .map((entry, index) => (
                            <Box
                              key={index}
                              bg={index === deleteIndex ? 'red.100' : 'gray.100'}
                              p={2}
                              borderRadius="md"
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Box>
                                <Text>
                                  <strong>Food:</strong> {entry.foodName}
                                </Text>
                                <Text>
                                  <strong>Calories:</strong> {entry.calories}
                                </Text>
                                <Text>
                                  <strong>Date:</strong> {entry.date}
                                </Text>
                              </Box>
                              <Button
                                colorScheme="red"
                                size="sm"
                                onClick={() => handleDeleteConfirmation(index)}
                                ml={2}
                              >
                                Delete
                              </Button>
                            </Box>
                          ))}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Stack>
              {isCalorieLimitExceeded() && (
                <Text color="red.500" mt={4}>
                  Calorie Limit Exceeded! Extra Calories: {getExceededCalories()}
                </Text>
              )}
              <Divider my={4} />
              <Text>
                <strong>Total Calories:</strong> {getTotalCalories()}
              </Text>
              <Text>
                <strong>Daily Limit:</strong> {dailyLimit} calories
              </Text>
              <Text color={isCalorieLimitExceeded() ? 'red.500' : 'gray.500'}>
                <strong>Remaining Calories:</strong> {getRemainingCalories()}
              </Text>
            </Box>
          </GridItem>
        </Grid>

        <AlertDialog
          isOpen={isDeleteAlertOpen}
          leastDestructiveRef={null}
          onClose={handleDeleteCancel}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Entry
              </AlertDialogHeader>

              <AlertDialogBody>Are you sure you want to delete this entry?</AlertDialogBody>

              <AlertDialogFooter>
                <Button variant="ghost" onClick={handleDeleteCancel}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </ChakraProvider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));