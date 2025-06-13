import { SVGProps } from "react";

export default function IconCommandLine(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 19h8" />
      <path d="m4 17 6-6-6-6" />
    </svg>
  );
}
