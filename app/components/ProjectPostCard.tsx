"use client";
import { Heading, Text, Box } from "@chakra-ui/react";
export default function ProjectPostCard() {
  return (
    <>
      <Box maxW="md" mt={4} border="solid" p={2}>
        <Heading fontSize="lg">Spotify Stats</Heading>
        <Text fontSize="md">View Your Personalized Spotify Profile Data</Text>
        <Text>React - Spotify API - ChakraUI - Vercel</Text>
      </Box>
    </>
  );
}
