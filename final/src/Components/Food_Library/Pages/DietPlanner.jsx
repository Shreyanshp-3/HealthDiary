import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalDietPlanner = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [selectedDay, setSelectedDay] = useState(1);
  const [isAddingMealPlan, setIsAddingMealPlan] = useState(true);
  const [formData, setFormData] = useState({
    breakfast: '',
    lunch: '',
    dinner: '',
    extras: '',
  });

  const handleAddMealPlan = (event) => {
    event.preventDefault();
    if (!formData.breakfast || !formData.lunch || !formData.dinner || !formData.extras) {
      toast.error('Please fill in all fields.', {
        position: 'top-center',
      });
      return;
    }
    const newMealPlan = {
      date: new Date().toISOString().split('T')[0],
      ...formData,
    };
    setMealPlans((prevMealPlans) => [...prevMealPlans, newMealPlan]);
    setFormData({
      breakfast: '',
      lunch: '',
      dinner: '',
      extras: '',
    });
    toast.success('Meal plan added successfully.', {
      position: 'top-center',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleDeleteMealPlan = (index) => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Are you sure you want to delete this meal plan?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setMealPlans((prevMealPlans) =>
              prevMealPlans.filter((_, i) => i !== index)
            );
            toast.success('Meal plan deleted successfully.', {
              position: 'top-center',
            });
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  useEffect(() => {
    const storedMealPlans = JSON.parse(localStorage.getItem('mealPlans'));
    if (storedMealPlans) {
      setMealPlans(storedMealPlans);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mealPlans', JSON.stringify(mealPlans));
  }, [mealPlans]);

  const handleViewHistory = () => {
    setIsAddingMealPlan(false);
  };

  const handleViewTodayMeal = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayMealPlan = mealPlans.find((mealPlan) => mealPlan.date === today);
    if (todayMealPlan) {
      toast.info('Today\'s meal plan:', {
        position: 'top-center',
      });
      console.log(todayMealPlan);
    } else {
      toast.info('No meal plan found for today.', {
        position: 'top-center',
      });
    }
  };

  const handleGoBack = () => {
    setIsAddingMealPlan(true);
  };

  if (!isAddingMealPlan) {
    return (
      <Box p={4}>
        <Button colorScheme="purple" mb={4} onClick={handleGoBack}>
          Go Back
        </Button>
        <Heading mb={4}>Meal Plan History</Heading>
        {mealPlans.map((mealPlan, index) => (
          <Box
            key={index}
            borderWidth={1}
            borderRadius="md"
            p={4}
            mb={4}
            boxShadow="md"
          >
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem>
                <Text>Date: {mealPlan.date}</Text>
                <Text>Breakfast: {mealPlan.breakfast}</Text>
                <Text>Lunch: {mealPlan.lunch}</Text>
                <Text>Dinner: {mealPlan.dinner}</Text>
                <Text>Extras: {mealPlan.extras}</Text>
              </GridItem>
              <GridItem>
                <Button
                  size="sm"
                  colorScheme="red"
                  mt={4}
                  onClick={() => handleDeleteMealPlan(index)}
                >
                  Delete Meal Plan
                </Button>
              </GridItem>
            </Grid>
          </Box>
        ))}
        <ToastContainer position="top-center" autoClose={3000} />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Heading mb={4}>Personal Diet Planner</Heading>
      <form onSubmit={handleAddMealPlan}>
        <VStack spacing={4} align="start">
          <FormControl>
            <FormLabel>Breakfast</FormLabel>
            <Input
              name="breakfast"
              value={formData.breakfast}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Lunch</FormLabel>
            <Input
              name="lunch"
              value={formData.lunch}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Dinner</FormLabel>
            <Input
              name="dinner"
              value={formData.dinner}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Extras</FormLabel>
            <Input
              name="extras"
              value={formData.extras}
              onChange={handleInputChange}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="purple">
            Add Meal Plan
          </Button>
          <Button colorScheme="gray" onClick={handleViewHistory} mt={4}>
            View History
          </Button>
          <Button colorScheme="purple" onClick={handleViewTodayMeal} mt={4}>
            View Today's Meal
          </Button>
        </VStack>
      </form>
      <ToastContainer position="top-center" autoClose={3000} />
    </Box>
  );
};

export default PersonalDietPlanner;
