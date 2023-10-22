import styles from "./ProjectCounter.module.css";

export default function ProjectCounter({ completedProjects }) {
  //This exports the ProjectCounter functional component. It takes one prop,
  // completedProjects, which is the number of projects that have been completed.
  const numbers = Array.from({ length: 15 }, (_, index) => index + 1);
  //The component starts by creating an array called numbers. this array
  // is generated using the array.from method and contains num 1-15. th map func
  // populates the array with the numbers 1-15
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
// ======= notes for above =========//
// The className attribute for each div is constructed using template literals and conditional
// logic. It combines the class names styles.numbers (from the imported CSS module) and styles.completed
// if the current number is less than or equal to the completedProjects then the styles.completes changes how many numbers are highlighted

// The number is displayed inside each div, indicating the project number.
