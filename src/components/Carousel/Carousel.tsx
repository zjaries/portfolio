import { Text } from "@chakra-ui/react";
import styles from "./Carousel.module.css";
import IconReact from "../Icons/IconReact";
import IconAWS from "../Icons/IconAWS";
import IconTypeScript from "../Icons/IconTypeScript";
import IconNextJS from "../Icons/IconNextJS";
import IconNodeJS from "../Icons/IconNodeJS";
import IconPostgres from "../Icons/IconPostgres";
import IconDocker from "../Icons/IconDocker";
import IconGitHub from "../Icons/IconGithub";
import IconGCP from "../Icons/IconGCP";
import IconJS from "../Icons/IconJS";

const techStack = [
  {
    title: "React",
    icon: <IconReact width={40} height={40} />,
    href: "https://react.dev/",
  },
  {
    title: "JavaScript",
    icon: <IconJS width={40} height={40} />,
    href: "https://262.ecma-international.org/",
  },
  {
    title: "TypeScript",
    icon: <IconTypeScript width={40} height={40} />,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "Next.js",
    icon: <IconNextJS width={40} height={40} />,
    href: "https://nextjs.org/",
  },
  {
    title: "Node.js",
    icon: <IconNodeJS width={40} height={40} />,
    href: "https://nodejs.org/en",
  },
  {
    title: "PostgreSQL",
    icon: <IconPostgres width={40} height={40} />,
    href: "https://www.postgresql.org/",
  },
  {
    title: "Amazon Web Services",
    icon: <IconAWS width={40} height={40} />,
    href: "https://aws.amazon.com/",
  },
  {
    title: "GCP",
    icon: <IconGCP width={40} height={40} />,
    href: "https://cloud.google.com/",
  },
  {
    title: "Docker",
    icon: <IconDocker width={40} height={40} />,
    href: "https://www.google.ca",
  },
  {
    title: "GitHub",
    icon: <IconGitHub width={40} height={40} />,
    href: "https://github.com/zjaries",
  },
];

export default function Carousel() {
  const groups = [techStack, techStack];
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
