import clsx from "clsx";
import styles from "./StarField.module.css";

type StarFieldProps = {
  direction?: "clockwise" | "counterclockwise";
  count?: number;
};

export default function StarField({
  direction = "clockwise",
  count = 75,
}: StarFieldProps) {
  const stars = Array.from({ length: count }, (_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 20;
    const size = 2 + Math.random() * 2; // 2px to 4px

    return (
      <div
        key={i}
        className={styles.star}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div className={styles.starfieldContainer}>
      <div
        className={clsx(styles.starfield, {
          [styles.reverse]: direction === "counterclockwise",
        })}
      >
        {stars}
      </div>
    </div>
  );
}
