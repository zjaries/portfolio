import styles from "./Tag.module.css";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return <div className={`${styles.tag} ${className}`}>{children}</div>;
}
