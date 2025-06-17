import { Box, Heading, Text, HStack } from "@chakra-ui/react";

import IconEmail from "../Icons/IconEmail";

export function Contact() {
  return (
    <Box
      as="section"
      id="contact"
      py={24}
      px={6}
      maxW="xl"
      mx="auto"
      textAlign="center"
    >
      <Heading size="5xl" mb={4}>
        Get in Touch
      </Heading>
      <Text fontSize="md" mb={10} color="gray.300">
        Feel free to reach out — I&apos;m always happy to connect.
      </Text>
      <HStack justify="center" gap={4}>
        <a
          href="mailto:zach.j.aries@gmail.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 500,
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          <IconEmail width={16} height={16} />
          zach.j.aries@gmail.com
        </a>
        <Text>|</Text>
        <a
          href="https://www.linkedin.com/in/zacharies"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 500,
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          linkedin.com/in/zacharies
        </a>
      </HStack>
    </Box>
  );
}
