import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, VStack, Input, Button, Box, Text, FormControl, FormLabel } from '@chakra-ui/react';

const TestSystem = () => {
  const { register, handleSubmit, reset } = useForm();
  const [testResults, setTestResults] = useState(null);

  const onSubmit = (data) => {
    // Simulate test evaluation
    const correctAnswers = {
      question1: 'Answer1',
      question2: 'Answer2',
      question3: 'Answer3',
    };

    let score = 0;
    Object.keys(correctAnswers).forEach((key) => {
      if (data[key] === correctAnswers[key]) {
        score += 1;
      }
    });

    const feedback = score >= 2 ? 'Great job!' : 'Needs improvement.';

    setTestResults({ score, feedback });
    reset();
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Take a Test</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="question1">
            <FormLabel>Question 1</FormLabel>
            <Input placeholder="Your answer" {...register('question1')} />
          </FormControl>
          <FormControl id="question2">
            <FormLabel>Question 2</FormLabel>
            <Input placeholder="Your answer" {...register('question2')} />
          </FormControl>
          <FormControl id="question3">
            <FormLabel>Question 3</FormLabel>
            <Input placeholder="Your answer" {...register('question3')} />
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
        {testResults && (
          <Box p={4} bg="gray.100" borderRadius="md" width="100%">
            <Text>Score: {testResults.score}</Text>
            <Text>Feedback: {testResults.feedback}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default TestSystem;