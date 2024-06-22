import { useState } from "react";
import { Container, Text, VStack, Input, Button, Box } from "@chakra-ui/react";
import AIFaceTalk from "../components/AIFaceTalk";

const AITeacher = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    // Simulate an AI response for now
    const aiResponse = `AI Response to: ${userInput}`;
    setResponse(aiResponse);
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">AI Teacher Online</Text>
        <Input
          placeholder="Ask me anything..."
          value={userInput}
          onChange={handleInputChange}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
        {response && (
          <Box p={4} bg="gray.100" borderRadius="md" width="100%">
            <Text>{response}</Text>
          </Box>
        )}
        <AIFaceTalk />
      </VStack>
    </Container>
  );
};

export default AITeacher;