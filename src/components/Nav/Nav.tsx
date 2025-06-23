"use client";

import { useEffect, useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import config from "@/config";
import styles from "./Nav.module.css";
import IconMenu from "../Icons/IconMenu";

interface NavLink {
  href: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

interface NavProps {
  links: NavLink[];
  back?: boolean;
}

export function Nav({ links }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
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
      <Link href="/" className={styles.logo}>
        <Image
          src={`${config.basePath}/images/logo.png`}
          alt="Z"
          width={726}
          height={721}
        />
      </Link>
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
        {links.map(({ href, title, subtitle, icon }) => (
          <a
            key={href}
            href={href}
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            <Box
              className={styles.navSubtitle}
              display="flex"
              alignItems="center"
              height={18}
            >
              {icon ?? subtitle}
            </Box>
            <Text as="span" className={styles.navTitle}>
              {title}
            </Text>
          </a>
        ))}
      </Box>
    </VStack>
  );
}
