import styles from "./page.module.css";
import { About } from "@/components/About/About";
import { Projects } from "@/components/Projects/Projects";
import { Hero } from "@/components/Hero/Hero";
import { Contact } from "@/components/Contact/Contact";
import Carousel from "@/components/Carousel/Carousel";
import { Nav } from "@/components/Nav/Nav";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Nav />
        <Hero />
        <Carousel />
      </header>
      <main className={styles.main}>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
