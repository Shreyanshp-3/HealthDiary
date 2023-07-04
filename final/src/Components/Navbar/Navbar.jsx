import React from "react";
import { Box, Flex, Text, Button, Stack ,Image  } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "./new2logo.png";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <Image
                src={Logo}
                alt="Image description"
                width="13rem"
                height="5rem"
                // boxSize="rem"
                // viewBox="0 0 20 20"
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="white"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Link href={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

const MenuLinks = ({ isOpen }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={{ base: 8, md: 8, xl: 16 }}
                align="center"
                mb="0"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/DietLibrary">Diet Library</Link>

                <Link className="nav-link" to="/FoodLibrary">Food Library</Link>

                <Link className="nav-link" to="/ExerciseLibrary/ExerciseLibrary">Exercise</Link>
                <Link className="nav-link" to="/SymptomPrediction/SymptomPrediction">Symptom Prediction</Link>
                <Link className="nav-link" to="/Feedback/Feedback">Feedback</Link>

                <MenuItem to="/" text-size="1.3rem" isLast>
                    <Button
                        csize="sm"
                        rounded="md"
                        color={["primary.500", "primary.500", "white", "white"]}
                        bg={["white", "white", "primary.500", "primary.500"]}
                        _hover={{
                            bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
                        }}
                    >
                        <Link className="nav-link" to="/Components/Signuppage">Sign in</Link>
                    </Button>
                </MenuItem>
            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={0}
            pt={{ base: "2rem", md: "2rem", xl: "5rem" }}
            pb={{ base: "2rem", md: "2rem", xl: "5rem" }}
            pr={{ base: "2rem", md: "3rem", xl: "10rem" }}
            pl={{ base: "2rem", md: "3rem", xl: "10rem" }}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default NavBar;
