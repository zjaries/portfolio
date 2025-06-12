import {
  Box,
  Heading,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
  Image,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

const projects = [
  {
    title: "AI Document Parser",
    slug: "ai-document-parser",
    image: "https://picsum.photos/600/400",
    description:
      "Automates document classification and data extraction with AI.",
  },
  {
    title: "Creative Studio",
    slug: "creative-studio",
    image: "https://picsum.photos/600/400",
    description: "Internal web platform for animated ad creation at scale.",
  },
  {
    title: "Vendor Compliance Engine",
    slug: "vendor-compliance",
    image: "https://picsum.photos/600/400",
    description:
      "Streamlines trade partner compliance with automated workflows.",
  },
];

export function Projects() {
  return (
    <Box as="section" id="projects" py={24} px={6} maxW="6xl" mx="auto">
      <Heading size="xl" mb={10}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap={8}>
        {projects.map((project) => (
          <LinkBox
            key={project.slug}
            as="article"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ shadow: "lg", transform: "translateY(-4px)" }}
            transition="all 0.2s ease"
          >
            <Image
              src={project.image}
              alt={project.title}
              objectFit="cover"
              w="100%"
              h="200px"
            />
            <Box p={5}>
              <Heading size="md" mb={2}>
                <LinkOverlay as={NextLink} href={`/projects/${project.slug}`}>
                  {project.title}
                </LinkOverlay>
              </Heading>
              <Text fontSize="sm" color="gray.400">
                {project.description}
              </Text>
            </Box>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
