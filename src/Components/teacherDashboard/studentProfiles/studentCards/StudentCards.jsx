import styles from "./StudentCards.module.css";

const StudentProfiles = () => {
  return (
    <div className={styles.studentProfileWrapper}>
      {/* <h1>Student Profiles</h1> */}
      {/* <ScrollableContent> */}
      <div className={styles.studentCard}>
        <img
          className={styles.studentPhoto}
          src="/images/students/AidenAndrews.png"
          alt="Student 1"
        />
        <h3>Student 1</h3>
        <p>Major: Computer Science</p>
      </div>

      <div className={styles.studentCard}>
        <img
          className={styles.studentPhoto}
          src="/images/students/AliceKindellan.png"
          alt="Student 2"
        />
        <h3>Student 2</h3>
        <p>Major: Biology</p>
      </div>

      <div className={styles.studentCard}>
        <img
          className={styles.studentPhoto}
          src="/images/students/CourtneyBristol.png"
          alt="Student 2"
        />
        <h3>Student 2</h3>
        <p>Major: Biology</p>
      </div>
    </div>
  );
};

export default StudentProfiles;
