import { notFound } from "next/navigation";
import { Box, Container, Heading, Image } from "@chakra-ui/react";
import { Nav } from "@/components/Nav/Nav";
import IconCommandLine from "@/components/Icons/IconCommandLine";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/content/projects/getProjects";
import Carousel from "@/components/Carousel/Carousel";
import PageContent from "@/components/PageContent/PageContent";
import { iconMap } from "@/utils/iconMap";
import config from "@/config";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return getAllProjectSlugs();
}

const links = [
  {
    href: "/#about",
    title: "About Me",
    subtitle: "Full Stack Engineer",
  },
  {
    href: "/#projects",
    title: "Projects",
    icon: <IconCommandLine height={14} />,
  },
  {
    href: "/#contact",
    title: "Contact",
  },
];

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return notFound();
  }

  const { contentHtml } = project;
  const { image, video, stack } = project.metadata;

  const techStack = stack.map((item: { title: string; href: string }) => ({
    title: item.title,
    icon: iconMap[item.title] || null,
    href: item.href || "#",
  }));

  const renderHeroAsset = () => {
    if (video) {
      return (
        <video className={styles.video} autoPlay loop muted preload="none">
          <source src={`${config.basePath}/${video}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    if (image) {
      return (
        <Image
          src={`${config.basePath}/${image}`}
          alt={project.metadata.title}
          className={styles.image}
          width="100%"
        />
      );
    }
    return null;
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Nav links={links} />
        <Container as="section" maxW="7xl" mx="auto" mb="8" position="relative">
          <Heading mb="8" mx="auto" lineHeight={1.2} px="2rem" maxWidth="5xl">
            {project.metadata.title}
          </Heading>
          {renderHeroAsset()}
          <Box mt="12">
            <Carousel items={techStack} />
          </Box>
        </Container>
      </header>
      <main className={styles.main}>
        <PageContent content={contentHtml} />
      </main>
    </div>
  );
}
