import { SVGProps } from "react";

export default function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}
