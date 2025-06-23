import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { readFileSync } from "fs";
import type { Article } from "@/components/Projects/Projects";

const projectsDir = path.join(process.cwd(), "src/content/projects");

export async function getAllProjectsMetaData() {
  const files = await readdir(projectsDir);

  const fetchData = files
    .filter((file) => file.endsWith(".md"))
    .map(async (file) => {
      const fileContents = readFileSync(path.join(projectsDir, file), "utf8");
      const { data } = matter(fileContents) as unknown as {
        data: Omit<Article, "slug">;
      };

      return { slug: file.replace(/\.md$/, ""), ...data };
    });

  const data = await Promise.all(fetchData);

  return data;
}

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(projectsDir, `${slug}.md`);
  const fileContents = await readFile(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    metadata: data,
    contentHtml,
  };
}

export async function getAllProjectSlugs() {
  const dir = await readdir(projectsDir);

  return dir.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}
