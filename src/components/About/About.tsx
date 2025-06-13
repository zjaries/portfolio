"use client";

import { Box, Heading, Text, Stack, Icon } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import { useColorModeValue } from "../color-mode";

export function About() {
  const accent = useColorModeValue("#7453b7", "#9c7cdb");

  return (
    <Box
      as="section"
      id="about"
      px={{ base: 6, md: 10 }}
      py={{ base: 20, md: 28 }}
      maxW="4xl"
      mx="auto"
      textAlign="left"
      position="relative"
    >
      <Stack gap={6}>
        <Stack direction="row" align="center" gap={3}>
          <Icon as={FiUser} boxSize={6} color={accent} />
          <Heading size="lg">About Me</Heading>
        </Stack>
        <Box
          height="1px"
          width="100%"
          bg="linear-gradient(to right, #7453b7, transparent)"
          mb={4}
        />

        <Text fontSize="lg" color="gray.400">
          I’m a full-stack engineer with over 7 years of experience delivering
          scalable, AI-driven platforms. I specialize in React, TypeScript,
          Node.js, and cloud infrastructure.
        </Text>

        <Text fontSize="lg" color="gray.400">
          I thrive on bridging product vision with reliable systems, shaping
          roadmaps and leading cross-functional engineering that brings real
          impact at scale.
        </Text>
      </Stack>
    </Box>
  );
}
