import { JSX } from "react";
import IconReact from "@/components/Icons/IconReact";
import IconAWS from "@/components/Icons/IconAWS";
import IconNextJS from "@/components/Icons/IconNextJS";
import IconNodeJS from "@/components/Icons/IconNodeJS";
import IconPostgres from "@/components/Icons/IconPostgres";
import IconDocker from "@/components/Icons/IconDocker";
import IconGitHub from "@/components/Icons/IconGithub";
import IconGCP from "@/components/Icons/IconGCP";
import IconJS from "@/components/Icons/IconJS";
import IconTypeScript from "@/components/Icons/IconTypeScript";
import IconOpenAI from "@/components/Icons/IconOpenAI";
import IconHono from "@/components/Icons/IconHono";

export const iconMap: Record<string, JSX.Element> = {
  React: <IconReact width={40} height={40} />,
  JavaScript: <IconJS width={40} height={40} />,
  TypeScript: <IconTypeScript width={40} height={40} />,
  "Next.js": <IconNextJS width={40} height={40} />,
  "Node.js": <IconNodeJS width={40} height={40} />,
  PostgreSQL: <IconPostgres width={40} height={40} />,
  "Amazon Web Services": <IconAWS width={40} height={40} />,
  GCP: <IconGCP width={40} height={40} />,
  Docker: <IconDocker width={40} height={40} />,
  GitHub: <IconGitHub width={40} height={40} />,
  OpenAI: <IconOpenAI width={40} height={40} />,
  Hono: <IconHono width={40} height={40} />,
};
