"use client";

import { useEffect, useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import styles from "./Nav.module.css";
import IconCommandLine from "../Icons/IconCommandLine";
import IconMenu from "../Icons/IconMenu";
import clsx from "clsx";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <VStack
      as="nav"
      alignItems="flex-end"
      className={clsx(styles.navWrapper, {
        [styles.open]: isOpen,
      })}
    >
      <button
        aria-label="Toggle Menu"
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconMenu width={32} height={32} />
      </button>

      <Box
        className={clsx(styles.nav, {
          [styles.navOpen]: isOpen,
        })}
      >
        <a
          href="#about"
          className={styles.navLink}
          onClick={() => setIsOpen(false)}
        >
          <Text fontSize="xs" className={styles.navSubtitle}>
            Full Stack Engineer
          </Text>
          <Text className={styles.navTitle}>About Me</Text>
        </a>
        <a
          href="#projects"
          className={styles.navLink}
          onClick={() => setIsOpen(false)}
        >
          <Box
            className={styles.navSubtitle}
            display="flex"
            alignItems="center"
            height={18}
          >
            <IconCommandLine height={14} />
          </Box>
          <Text className={styles.navTitle}>Projects</Text>
        </a>
        <a
          href="#contact"
          className={styles.navLink}
          onClick={() => setIsOpen(false)}
        >
          <Box className={styles.navSubtitle} height={18}></Box>
          <Text className={styles.navTitle}>Contact</Text>
        </a>
      </Box>
    </VStack>
  );
}
