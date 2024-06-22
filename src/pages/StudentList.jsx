import React, { useState } from 'react';
import { Container, VStack, Input, Button, Box, Text, Table, Thead, Tbody, Tr, Th, Td, FormControl, FormLabel } from '@chakra-ui/react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [subjects, setSubjects] = useState('');

  const handleAddStudent = () => {
    const newStudent = { name, age: parseInt(age), grade, subjects: subjects.split(',') };
    setStudents([...students, newStudent]);
    setName('');
    setAge('');
    setGrade('');
    setSubjects('');
  };

  const handleDeleteStudent = (index) => {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
  };

  const calculateAverageAge = () => {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return (totalAge / students.length).toFixed(2);
  };

  const gradeDistribution = () => {
    const distribution = {};
    students.forEach(student => {
      distribution[student.grade] = (distribution[student.grade] || 0) + 1;
    });
    return distribution;
  };

  const subjectPopularity = () => {
    const popularity = {};
    students.forEach(student => {
      student.subjects.forEach(subject => {
        popularity[subject] = (popularity[subject] || 0) + 1;
      });
    });
    return popularity;
  };

  return (
    <Container centerContent>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Student List</Text>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="age">
          <FormLabel>Age</FormLabel>
          <Input value={age} onChange={(e) => setAge(e.target.value)} />
        </FormControl>
        <FormControl id="grade">
          <FormLabel>Grade</FormLabel>
          <Input value={grade} onChange={(e) => setGrade(e.target.value)} />
        </FormControl>
        <FormControl id="subjects">
          <FormLabel>Subjects (comma separated)</FormLabel>
          <Input value={subjects} onChange={(e) => setSubjects(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleAddStudent}>Add Student</Button>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th>Grade</Th>
              <Th>Subjects</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student, index) => (
              <Tr key={index}>
                <Td>{student.name}</Td>
                <Td>{student.age}</Td>
                <Td>{student.grade}</Td>
                <Td>{student.subjects.join(', ')}</Td>
                <Td>
                  <Button colorScheme="red" onClick={() => handleDeleteStudent(index)}>Delete</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {students.length > 0 && (
          <Box p={4} bg="gray.100" borderRadius="md" width="100%">
            <Text>Average Age: {calculateAverageAge()}</Text>
            <Text>Grade Distribution: {JSON.stringify(gradeDistribution())}</Text>
            <Text>Subject Popularity: {JSON.stringify(subjectPopularity())}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default StudentList;