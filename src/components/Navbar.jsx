import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>EduAI Pathway</Box>
        <Flex alignItems={"center"}>
          <Button as={Link} to="/" variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            Home
          </Button>
          <Button as={Link} to="/video-call" variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            Video Call
          </Button>
          <Button as={Link} to="/note-taking" variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            Note Taking
          </Button>
          <Button as={Link} to="/classroom-management" variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            Classroom Management
          </Button>
          <Button as={Link} to="/test-system" variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            Test System
          </Button>
          <Button as={Link} to="/ai-teacher" variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            AI Teacher Online
          </Button>
          <Button as={Link} to="/student-list" variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            Student List
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;