import { Box, Heading, Text, Stack } from "@chakra-ui/react";

import IconEmail from "../Icons/IconEmail";
import IconGitHub from "../Icons/IconGithub";
import IconLinkedIn from "../Icons/IconLinkedIn";

export function Contact() {
  return (
    <Box
      as="footer"
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
      <Stack direction="column" justify="center" align="center" gap={4}>
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
        <a
          href="https://github.com/zjaries"
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
          <IconGitHub width={16} height={16} />
          github.com/zjaries
        </a>
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
          <IconLinkedIn width={16} height={16} />
          linkedin.com/in/zacharies
        </a>
      </Stack>
    </Box>
  );
}
