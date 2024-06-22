import { Container, Text, VStack, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to EduAI Pathway</Text>
        <Text>Empowering Education with AI</Text>
        <Box>
          <Button as={Link} to="/video-call" colorScheme="teal" m={2}>Video Call</Button>
          <Button as={Link} to="/note-taking" colorScheme="teal" m={2}>Note Taking</Button>
          <Button as={Link} to="/classroom-management" colorScheme="teal" m={2}>Classroom Management</Button>
          <Button as={Link} to="/ai-teacher" colorScheme="teal" m={2}>AI Teacher Online</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;