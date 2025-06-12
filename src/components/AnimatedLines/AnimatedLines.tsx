import styles from "./AnimatedLines.module.css";

export default function AnimatedLines() {
  return (
    <div className={styles.lines}>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className={styles.line} />
      ))}
    </div>
  );
}
