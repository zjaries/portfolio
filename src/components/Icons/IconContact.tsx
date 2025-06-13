import { SVGProps } from "react";

export default function IconContact(props: SVGProps<SVGSVGElement>) {
  //   return (
  //     <svg
  //       width={16}
  //       height={16}
  //       {...props}
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       stroke="currentColor"
  //       strokeWidth={2}
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       {/* phone top line (full opacity) */}
  //       <path d="M16 2v2" strokeOpacity={1} />
  //       {/* left phone edge (0.8 opacity) */}
  //       <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" strokeOpacity={0.8} />
  //       {/* right phone top line (0.6 opacity) */}
  //       <path d="M8 2v2" strokeOpacity={0.6} />
  //       {/* user avatar circle (0.4 opacity) */}
  //       <circle cx={12} cy={11} r={3} strokeOpacity={0.4} />
  //       {/* phone body outline (0.2 opacity) */}
  //       <rect x={3} y={4} width={18} height={18} rx={2} strokeOpacity={0.2} />
  //     </svg>
  //   );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M16 2v2" />
      <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      <path d="M8 2v2" />
      <circle cx="12" cy="11" r="3" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
    </svg>
  );
}
