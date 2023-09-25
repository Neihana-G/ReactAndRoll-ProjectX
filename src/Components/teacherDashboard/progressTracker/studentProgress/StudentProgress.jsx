import styles from "./StudentProgress.module.css";
import ProjectCounter from "./projectCounter/ProjectCounter";

export default function StudentProgress({ name, gender, icon, datetime }) {
  return (
    <div className={styles.main}>
      <div className={styles.notificationBody}>
        <h1>AIDEN ANDREWS</h1>

        <p>4/15 Projects Completed</p>
      </div>
      <ProjectCounter />
    </div>
  );
}
