import { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
  Input
} from '@chakra-ui/react';
import axios from 'axios';

const DietPlanner = () => {
  const dc = document.querySelector('.id');
  const [dietPlannerText, setDietPlannerText] = useState('');
  const [error, setError] = useState('');
  const [heigt,setheight] = useState(null);
  const [weight,setwight] = useState(null);
  const [age,setage] = useState(null);
  const [gender,setgender] = useState('');

 const generateDietPlanner = async()=>{
   try {
   dc.innerHTML = 'Processing Your Diet PLan';
    const response = await fetch("http://localhost:1000/", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
          weight:weight,
          height:heigt,
          age:age,
          gender:gender
         }),
       });
    const data = await response.json();
     dc.innerHTML=data.message;
     setheight('');
     setwight('');
     age('');
     gender('');

   } catch (error) {
     console.log(error);
   }
 }
  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.userInput.value;
    if (userInput.trim() === '') {
      setError('Please enter your dietary preferences, restrictions, etc.');
    } else {
      generateDietPlanner(userInput);
    }
  };

  return (
    <Box p={4} w='100%'>
      <Heading m='2rem auto' >Diet Planner</Heading>
    <Box
    p='2rem'
    w='100%'
    alignItems={'center'}
    justifyContent={'center'}
    display={'flex'}
    flexDir={'column'}
    gap={'20px'}
    >
    <Input 
     w='70%'
    type='text'
    onChange={(event)=>setheight(event.target.value)}
    placeholder='height (cm)'
    p='1.2rem'
    />
<Input 
     w='70%'
    type='text'
    onChange={(event)=>setwight(event.target.value)}
    placeholder='weight (kg)'
    p='1.2rem'
    />
     <Input 
     w='70%'
    Text='text'
    onChange={(event)=>setage(event.target.value)}
    placeholder='Age in years'
    p='1.2rem'
    />

     <Input
     w='70%'
    type='text'
    onChange={(event)=>setgender(event.target.value)}
    placeholder='Gender  type MALE or FEMALE only '
    p='1.2rem'
    />
    <Button
    w='60%'
    m='0 auto'
    onClick={generateDietPlanner}
    > 
    Genrate Diet
    </Button>

    </Box>
    <Box
    mt='2rem'
     className='id'
     w='100%'
     display={'flex'}
     alignItems={'center'}
     justifyContent={'center'}
    >
    {dietPlannerText}

    </Box>
    </Box>
  );
};

export default DietPlanner;