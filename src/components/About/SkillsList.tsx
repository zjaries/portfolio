import { Box, Text, Flex, Image, Wrap, WrapItem } from "@chakra-ui/react";

const skills = [
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Chakra UI", icon: "/icons/chakra.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
];

export default function SkillsList() {
  return (
    <Box mt={6}>
      <Text fontSize="lg" fontWeight="semibold" mb={2}>
        Skills
      </Text>
      <Wrap gap={6}>
        {skills.map((skill) => (
          <WrapItem key={skill.name}>
            <Flex align="center" gap={2}>
              <Image
                src={skill.icon}
                alt={skill.name}
                boxSize="24px"
                aria-hidden
              />
            </Flex>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}
