import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
  href,
  target,
  rel,
}: ButtonProps) {
  const combinedClass = `${styles.button} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
