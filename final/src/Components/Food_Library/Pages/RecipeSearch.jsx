import { useState, useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  Grid,
  GridItem,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Link,
  Fade,
  useToast,
} from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeSearch = () => {
  const [searchInputTxt, setSearchInputTxt] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const modalBodyRef = useRef(null);
  const toast = useToast();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
      );
      const data = await response.json();

      if (data.meals) {
        setSearchResults(data.meals);
      }
      else {
        setSearchResults([]);
        toast({
          title: "Results Not Found",
          description: "Please check your spelling or try again later.",
          colorScheme: "purple",
          duration: 3000,
          isClosable: true,
          size: "lg",
          position: "top",
          variant: "subtle",
          style: {
            fontSize: "2rem", // Increase the font size
            padding: "2rem", // Increase the padding
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRecipeClick = async (recipe) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`
      );
      const data = await response.json();
      setSelectedRecipe(data.meals[0]);
      onOpen();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Scroll to top when search results change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchResults]);

  useEffect(() => {
    // Scroll to modal body when opened
    if (isOpen && modalBodyRef.current) {
      modalBodyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen]);

  return (
    <Box p={8} style={{ overflowY: "scroll" }}>
      <Heading
        mb={6}
        fontSize="4xl"
        textAlign="center"
        fontFamily="Arial"
        color="purple.600"
      >
        Recipe Search
      </Heading>
      <Box mb={6} display="flex" justifyContent="center">
        <Input
          value={searchInputTxt}
          onChange={(e) => setSearchInputTxt(e.target.value)}
          placeholder="Enter ingredients"
          mr={2}
          fontSize="lg"
          fontFamily="Arial"
          borderRadius="md"
          focusBorderColor="purple.300"
          _placeholder={{ color: "gray.400" }}
        />
        <Button
          colorScheme="purple"
          onClick={handleSearch}
          fontSize="lg"
          fontFamily="Arial"
          borderRadius="md"
          _focus={{ boxShadow: "none" }}
          _active={{ boxShadow: "none" }}
        >
          Search
        </Button>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {searchResults.map((recipe) => (
          <GridItem key={recipe.idMeal}>
            <Fade in>
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="md"
                cursor="pointer"
                onClick={() => handleRecipeClick(recipe)}
                transition="all 0.3s ease"
                _hover={{ boxShadow: "md" }}
              >
                <Image
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  objectFit="cover"
                  borderRadius="md"
                  height="200px"
                  width="100%"
                />
                <Text
                  mt={2}
                  fontWeight=""
                  textAlign="center"
                  fontSize="xl"
                  fontFamily="Arial"
                  color="purple.600"
                >
                  {recipe.strMeal}
                </Text>
                <Button
                  mt={2}
                  variant="outline"
                  colorScheme="purple"
                  size="sm"
                  fontFamily="Arial"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRecipeClick(recipe);
                  }}
                >
                  Show Recipe
                </Button>
              </Box>
            </Fade>
          </GridItem>
        ))}
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="white" borderRadius="md">
          <ModalHeader
            fontSize="2xl"
            fontFamily="Arial"
            borderBottomWidth="1px"
            pb={2}
            color="purple.600"
          >
            {selectedRecipe?.strMeal}
          </ModalHeader>
          <ModalCloseButton
            color="gray.400"
            _focus={{ boxShadow: "none" }}
            _hover={{ color: "teal.500" }}
          />
          <ModalBody ref={modalBodyRef} paddingBottom={8}>
            <Fade in>
              <Image
                src={selectedRecipe?.strMealThumb}
                alt={selectedRecipe?.strMeal}
                objectFit="cover"
                borderRadius="md"
                height="400px"
                width="100%"
              />
              <Text
                fontWeight="bold"
                fontSize="lg"
                fontFamily="Arial"
                color="purple.600"
                mt={6}
              >
                Category:
              </Text>
              <Text fontSize="md" fontFamily="Arial">
                {selectedRecipe?.strCategory}
              </Text>
              <Text
                fontWeight="bold"
                mt={4}
                fontSize="lg"
                fontFamily="Arial"
                color="purple.600"
              >
                Instructions:
              </Text>
              <Text fontSize="md" fontFamily="Arial">
                {selectedRecipe?.strInstructions}
              </Text>
              <Box mt={4}>
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  fontFamily="Arial"
                  color="purple.600"
                >
                  YouTube Video:
                </Text>
                <Link
                  href={selectedRecipe?.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="teal.500"
                  fontSize="md"
                  fontFamily="Arial"
                >
                  Watch Video
                </Link>
              </Box>
            </Fade>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default RecipeSearch;
