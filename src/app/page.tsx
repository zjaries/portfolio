import Image from "next/image";
import styles from "./page.module.css";
import { About } from "@/components/About/About";
import { Projects } from "@/components/Projects/Projects";
import { Hero } from "@/components/Hero/Hero";
import { Contact } from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Hero />
        <nav className={styles.nav}>
          <a href="#about">
            <Image
              aria-hidden
              src="/about.svg"
              alt="About"
              width={18}
              height={18}
            />
            About
          </a>
          <a href="#projects">
            <Image
              aria-hidden
              src="/project.svg"
              alt="Projects"
              width={18}
              height={18}
            />
            Projects
          </a>
          <a href="#contact">
            <Image
              aria-hidden
              src="/contact.svg"
              alt="Contact"
              width={18}
              height={18}
            />
            Contact
          </a>
        </nav>
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
