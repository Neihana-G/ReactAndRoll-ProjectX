import styles from "./ProjectCounter.module.css";

export default function ProjectCounter({ completedProjects }) {
  // Create an array with numbers from 1 to 15
  const numbers = Array.from({ length: 15 }, (_, index) => index + 1);
  return (
    <div className={styles.projectCounter}>
      {numbers.map((number) => (
        <div
          key={number}
          className={`${styles.numbers} ${
            number <= completedProjects ? styles.completed : ""
          }`}
        >
          {number}
        </div>
      ))}
    </div>
  );
}
// ================================
