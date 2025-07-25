import { Heading, Text } from "@chakra-ui/react";
import AnimatedLines from "../AnimatedLines/AnimatedLines";
import StarField from "../StarField/StarField";
import Tag from "../Tag/Tag";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <StarField />
      <StarField direction="counterclockwise" />
      <AnimatedLines />
      <div className={styles.heroContent}>
        <Heading as="h1" textAlign="center" className={styles.h1}>
          Zach Aries
        </Heading>
        <Text
          textStyle="md"
          textAlign="center"
          color="#f1f1f1"
          marginBottom="1rem"
        >
          Full-Stack Engineer with 7+ years of experience building scalable,
          AI-driven platforms using React, TypeScript, and cloud infrastructure.
        </Text>
        <Tag>
          <Text fontSize="md" textAlign="center" m={0}>
            Full Stack Engineer
          </Text>
        </Tag>
      </div>
    </section>
  );
}
