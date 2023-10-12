import { useEffect, useState } from "react";
import styles from "./StudentCards.module.css";

const StudentProfiles = () => {
  const [users, setUsers] = useState();

  useEffect(function () {
    fetch("http://localhost:4000/api/users")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUsers(response);
      });
  }, []);

  return (
    <div className={styles.studentProfileWrapper}>
      {users &&
        users.map(function (user) {
          return (
            <div className={styles.studentCard}>
              <img
                className={styles.studentPhoto}
                src={user.images}
                alt="Student 1"
              />
              <h3>{user.name}</h3>
              <p>Major: Computer Science</p>
            </div>
          );
        })}

      {/*       

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
      </div> */}
    </div>
  );
};

export default StudentProfiles;
