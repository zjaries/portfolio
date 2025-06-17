"use client";
import { Box, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import mediumZoom from "medium-zoom";

export default function Content(props: { content: string }) {
  useEffect(() => {
    mediumZoom("#page-content img", {
      margin: 24,
      background: "#050a15",
      scrollOffset: 40,
    });
  }, []);

  return (
    <Container id="page-content" as="section" maxW="5xl" mx="auto" px="8">
      <Box
        id="about"
        mb="16"
        textAlign="left"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></Box>
    </Container>
  );
}
