import styles from "./page.module.css";
import { About } from "@/components/About/About";
import { Projects } from "@/components/Projects/Projects";
import { Hero } from "@/components/Hero/Hero";
import { Contact } from "@/components/Contact/Contact";
import Carousel from "@/components/Carousel/Carousel";
import { Nav } from "@/components/Nav/Nav";
import IconCommandLine from "@/components/Icons/IconCommandLine";
import { iconMap } from "@/utils/iconMap";
import { getAllProjectsMetaData } from "@/content/projects/getProjects";

const links = [
  {
    href: "#about",
    title: "About Me",
    subtitle: "Full Stack Engineer",
  },
  {
    href: "#projects",
    title: "Projects",
    icon: <IconCommandLine height={14} />,
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

const techStack = [
  {
    title: "React",
    href: "https://react.dev/",
  },
  {
    title: "JavaScript",
    href: "https://262.ecma-international.org/",
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    title: "Node.js",
    href: "https://nodejs.org/en",
  },
  {
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  {
    title: "Amazon Web Services",
    href: "https://aws.amazon.com/",
  },
  {
    title: "GCP",
    href: "https://cloud.google.com/",
  },
  {
    title: "Docker",
    href: "https://www.google.ca",
  },
  {
    title: "GitHub",
    href: "https://github.com/zjaries",
  },
];

export default async function Home() {
  const projects = await getAllProjectsMetaData();

  const items = techStack.map((item) => ({
    title: item.title,
    icon: iconMap[item.title] || null,
    href: item.href,
  }));

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Nav links={links} />
        <Hero />
        <Carousel items={items} />
      </header>
      <main className={styles.main}>
        <About />
        <Projects projects={projects} />
      </main>
      <Contact />
    </div>
  );
}
