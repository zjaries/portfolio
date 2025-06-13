import config from "@/config";
import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./About.module.css";
import IconArrowDownRight from "../Icons/IconArrowDownRight";
import Button from "../Button/Button";

export function About() {
  return (
    <Box
      as="section"
      id="about"
      my="7rem"
      maxW="6xl"
      mx="auto"
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

      <HStack gap={10} alignItems="flex-start">
        <Image
          src={`${config.basePath}/about-me-01.png`}
          alt="Zach Aries"
          width={500}
          height={500}
          className={styles.image}
        />
        <Box>
          <Text fontSize="lg" mb="2" color="#c0c0c0">
            👋 Hi, I’m Zach — a full-stack engineer based in Calgary with over 7
            years of experience building product-focused web platforms.
          </Text>

          <Text fontSize="lg" mb="4" color="#c0c0c0">
            I care deeply about working on teams that are focused, aligned, and
            customer-driven. I’m most at home designing and delivering systems
            that solve real problems — with code that’s fast, clear, and built
            to last.
          </Text>

          <Heading size="lg" mb="2">
            My Career
          </Heading>
          <Text fontSize="lg" mb="6" color="#c0c0c0">
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
      </HStack>
    </Box>
  );
}
