import { Box, Flex, Text, Image, Stack } from "@chakra-ui/react";

function Rough() {
  return (
    <Box bg="purple.400" color="white" py={4} px={8} >
      <Stack direction={{ base: "column", md: "row" }} align={{ base: "center", md: "flex-start" }} justify="space-between" spacing={4}>
        <Flex direction="column" align={{ base: "center", md: "flex-start" }}>
          <Image src="/path/to/logo.png" alt="Logo" w={12} h={12} mb={0} />
          <Text>347 South Kasba Budhwar Peth </Text>
          <Text>Solapur, Maharashtra 413001</Text>
        </Flex>
        <Stack direction="row" align="center" justify={{ base: "center", md: "flex-end" }} spacing={4}>
          <Text>&copy; 2023 Your Website. All rights reserved.</Text>
          <Text>Designed by Team 4</Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Rough;
