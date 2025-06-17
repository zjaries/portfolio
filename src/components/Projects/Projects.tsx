"use client";

import {
  Box,
  Heading,
  LinkBox,
  LinkOverlay,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "./Projects.module.css";
import { useState } from "react";
import clsx from "clsx";
import Button from "../Button/Button";
import config from "@/config";

const projects = [
  {
    title: "Wreno Credentialing API",
    slug: "credentialing-api",
    image: `${config.basePath}/images/projects/credentialing-api-thumbnail.png`,
    description:
      "An AI-powered document processing platform that automatically classifies, extracts, and verifies compliance documents like W9s, COIs, and trade licenses. It uses a flexible processing pipeline that sends data through webhooks in real time and supports plugging in any AI model for document parsing and verification.",
    stack: "TypeScript, Node.js, Hono, React, PostgreSQL, GCP",
  },
  {
    title: "Wreno Vendor Management Platform",
    slug: "vendor-management",
    image: `${config.basePath}/images/projects/vendor-management-thumbnail.png`,
    description:
      "A full-featured platform for managing vendor compliance at scale, enabling companies to track credential status, set custom requirements, and automate document workflows. The system streamlines onboarding and reduces compliance risk by surfacing real-time status, auditability, and AI-driven verification across vendors and projects.",
    stack: "TypeScript, Node.js, Express, React, NextJS, PostgreSQL, GCP",
  },
  // {
  //   title: "Creative Studio",
  //   slug: "creative-studio",
  //   image: "https://picsum.photos/1200/300",
  //   description: "Internal web platform for animated ad creation at scale.",
  // },
  // {
  //   title: "Vendor Compliance Engine",
  //   slug: "vendor-compliance",
  //   image: "https://picsum.photos/1200/300",
  //   description:
  //     "Streamlines trade partner compliance with automated workflows.",
  // },
];

export function Projects() {
  return (
    <Box as="section" id="projects" py={24} px={6} maxW="4xl" mx="auto">
      <Heading size="5xl" mb={10}>
        Projects
      </Heading>
      <Stack gap={16}>
        {projects.map((project, idx) => (
          <Article
            key={project.slug}
            index={idx}
            slug={project.slug}
            title={project.title}
            imageUrl={project.image}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </Stack>
    </Box>
  );
}

interface ArticleProps {
  index: number;
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
  stack?: string;
}
function Article(props: ArticleProps) {
  const { index, slug, title, imageUrl, description, stack } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <LinkBox
      key={slug}
      as="article"
      borderRadius="2rem"
      overflow="hidden"
      transition="all 0.2s ease"
      className={clsx(styles.article, hovered && styles.hovered)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <LinkOverlay as={NextLink} href={`/projects/${slug}`}>
        <Stack
          direction={{
            base: "column",
            md: index % 2 === 1 ? "row-reverse" : "row",
          }}
          gap={0}
          pos="relative"
        >
          <Image
            src={imageUrl}
            alt={title}
            objectFit="cover"
            objectPosition="top"
            w="100%"
            h="400px"
            className={styles.articleImage}
          />
          <Stack
            className={styles.articleOverview}
            justifyContent="space-between"
            px={10}
            py={7}
          >
            <Box>
              <Heading size="lg" mb={2} maxW="200px">
                {title}
              </Heading>
              <Text fontSize="sm" className={styles.articleDescription}>
                {description}
              </Text>
            </Box>
            <Box>
              {stack && (
                <>
                  <Heading as="h3" size="sm">
                    Tech Stack
                  </Heading>
                  <Text
                    fontSize="sm"
                    color="gray.300"
                    mb={4}
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    maxHeight="1.2rem"
                  >
                    {stack}
                  </Text>
                </>
              )}
              <Button>Read More</Button>
            </Box>
          </Stack>
        </Stack>
      </LinkOverlay>
    </LinkBox>
  );
}
