import { JSX } from "react";
import { Text } from "@chakra-ui/react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  items: {
    title: string;
    icon: JSX.Element;
    href: string;
  }[];
}

export default function Carousel(props: CarouselProps) {
  const { items } = props;
  const groups = [items, items];

  return (
    <div className={styles.carousel}>
      {groups.map((group, index) => (
        <div
          className={styles.group}
          aria-hidden={index > 0}
          key={`carousel-group-${index}`}
        >
          {group.map((item, index) => (
            <a
              key={`carousel-item-${index}`}
              className={styles.item}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
              <Text
                fontSize="small"
                textAlign="center"
                className={styles.title}
              >
                {item.title}
              </Text>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
