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

export interface Article {
  slug: string;
  title: string;
  image: string;
  thumbnail: string;
  description: string;
  stack?: { title: "Node.js" }[];
}

interface ProjectsProps {
  projects: Article[];
}

export function Projects(props: ProjectsProps) {
  const { projects = [] } = props;

  if (projects.length === 0) {
    return null;
  }

  return (
    <Box
      as="section"
      id="projects"
      py={{ base: 0, md: 24 }}
      px={6}
      maxW="4xl"
      mx="auto"
    >
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
            image={project.image}
            thumbnail={project.thumbnail}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </Stack>
    </Box>
  );
}

interface ArticleProps extends Article {
  index: number;
}

function Article(props: ArticleProps) {
  const { index, slug, title, thumbnail, description, stack } = props;
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
            src={thumbnail}
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
              <Heading as="h3" size="sm" mb={2} maxW="200px">
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
                    className={styles.techStack}
                    fontSize="sm"
                    color="gray.300"
                    mb={4}
                  >
                    {stack.map((item) => item.title).join(", ")}
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
