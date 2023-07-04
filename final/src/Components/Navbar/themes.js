import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#E39FF6",
    300: "#E39FF6",
    400: "#E39FF6",
    500: "#E39FF6", // the button
    600: "#E39FF6",
    700: "#AC2CC4" , // the name links in the navbar
    800: "#E39FF6",
    900: "#E39FF6"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;
