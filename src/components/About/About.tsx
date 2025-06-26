import config from "@/config";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./About.module.css";
import IconArrowDownRight from "../Icons/IconArrowDownRight";
import Button from "../Button/Button";
import IconGitHub from "../Icons/IconGithub";

export function About() {
  return (
    <Box
      as="section"
      id="about"
      my="7rem"
      maxW="6xl"
      mx="auto"
      px="1.5rem"
      textAlign="left"
      position="relative"
    >
      <Heading size="7xl">
        About Me{" "}
        <IconArrowDownRight
          width={72}
          height={72}
          color="#6e4faf"
          style={{
            display: "inline-block",
          }}
        />
      </Heading>

      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        my="0 2rem"
        mx="auto"
        padding={{ base: "5px", md: "1rem", lg: "2rem" }}
        borderRadius="1rem"
        maxW="720px"
        background="#0e121c"
      >
        <Box>
          <a
            href="https://github.com/zjaries"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontWeight: 500,
              fontSize: "0.75rem",
              textDecoration: "none",
              marginBottom: "1rem",
            }}
          >
            <IconGitHub width={16} height={16} />
            github.com/zjaries
          </a>
        </Box>
        <Image
          src="https://ghchart.rshah.org/050a15/zjaries"
          alt="GitHub Contributions Chart"
          priority
          width={720}
          height={180}
        />
      </Box>
      <Stack
        gap={10}
        alignItems="flex-start"
        direction={{ base: "column", md: "row" }}
      >
        <Image
          src={`${config.basePath}/about-me-01.png`}
          alt="Zach Aries"
          width={500}
          height={500}
          className={styles.image}
        />
        <Box>
          <Heading size="lg" mb="2">
            👋 Hi, I’m Zach
          </Heading>
          <Text mb="2" color="#c0c0c0">
            A full-stack engineer based in Calgary with over 7 years of
            experience building product-focused web platforms.
          </Text>

          <Text mb="4" color="#c0c0c0">
            I care deeply about working on teams that are focused, aligned, and
            customer-driven. I’m most at home designing and delivering systems
            that solve real problems — with code that’s fast, clear, and built
            to last.
          </Text>

          <Heading size="lg" mb="2">
            My Career
          </Heading>
          <Text mb="6" color="#c0c0c0">
            Most recently, I was Engineering Director at Wreno, where I led
            development of an AI-powered Credentialing API — from designing the
            OpenAPI infrastructure to building document classification,
            extraction, and verification systems at scale. Before that, I was a
            Software Engineer II at Amazon, where I built high-performance ad
            tooling used across internal teams.
          </Text>

          <Button href="#contact">
            Hire Me{" "}
            <IconArrowDownRight
              width={16}
              height={16}
              style={{
                marginLeft: "0.5rem",
                display: "inline-block",
              }}
            />
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
