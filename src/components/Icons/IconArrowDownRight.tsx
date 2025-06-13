import { SVGProps } from "react";

export default function IconArrowDownRight(props: SVGProps<SVGSVGElement>) {
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
      <path d="m7 7 10 10" />
      <path d="M17 7v10H7" />
    </svg>
  );
}
