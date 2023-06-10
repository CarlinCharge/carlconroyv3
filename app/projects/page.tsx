"use client";
import ProjectPostCard from "../components/ProjectPostCard";

import { Heading, Flex, Box } from "@chakra-ui/react";

export default function Projects() {
  return (
    <>
      <Heading textAlign="center">Projects</Heading>
      <Flex alignItems="center" pt="12" direction="column" textAlign="center">
        <Box>
          <ProjectPostCard />
        </Box>
      </Flex>
    </>
  );
}
