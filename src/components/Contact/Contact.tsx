import config from "@/config";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";

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
      <Heading size="xl" mb={4}>
        Get in Touch
      </Heading>
      <Text fontSize="md" mb={10} color="gray.400">
        Feel free to reach out — I&apos;m always happy to connect.
      </Text>
      <HStack justify="center" gap={4}>
        <a
          href="mailto:zach.j.aries@gmail.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#6a4dad",
            fontWeight: 500,
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          <Image
            src={`${config.basePath}/email.svg`}
            alt="Email"
            width={18}
            height={18}
            aria-hidden
          />
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
            color: "#6a4dad",
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
