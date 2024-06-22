import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

const AIFaceTalk = () => {
  const webcamRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [aiResponse, setAiResponse] = useState("");

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      setModelsLoaded(true);
    };
    loadModels();
  }, []);

  const handleVideoOnPlay = async () => {
    if (webcamRef.current && modelsLoaded) {
      const video = webcamRef.current.video;
      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(video, displaySize);

      setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        const canvas = faceapi.createCanvasFromMedia(video);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      }, 100);
    }
  };

  const handleAiResponse = () => {
    // Simulate AI response
    setAiResponse("Hello! How can I assist you today?");
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Text fontSize="2xl">AI Face Talk</Text>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          onUserMedia={handleVideoOnPlay}
        />
        <Button colorScheme="teal" onClick={handleAiResponse}>
          Talk to AI
        </Button>
        {aiResponse && (
          <Box p={4} bg="gray.100" borderRadius="md" width="100%">
            <Text>{aiResponse}</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default AIFaceTalk;