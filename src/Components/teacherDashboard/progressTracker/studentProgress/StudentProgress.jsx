// import styles from "./StudentProgress.module.css";
// import ProjectCounter from "./projectCounter/ProjectCounter";

// export default function StudentProgress({ name, gender, icon, datetime }) {
//   return (
//     <div className={styles.main}>
//       <div className={styles.notificationBody}>
//         <h1>AIDEN ANDREWS</h1>

//         <p>4/15 Projects Completed</p>
//       </div>
//       <ProjectCounter />
//     </div>
//   );
// }
// ==================================

import { useEffect, useState } from "react";
import styles from "./StudentProgress.module.css";
import ProjectCounter from "./projectCounter/ProjectCounter";

const StudentProgress = () => {
  const [userprojects, setUserprojects] = useState();

  useEffect(function () {
    fetch("http://localhost:4000/api/userprojects")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUserprojects(response);
      });
  }, []);

  return (
    <div className={styles.main}>
      {userprojects &&
        userprojects.map(function (userprojects) {
          return (
            <div className={styles.notificationBody}>
              <h1>{userprojects.name}</h1>
              <p>{userprojects.completed_projects}/15 Projects Completed</p>
              <ProjectCounter
                completedProjects={userprojects.completed_projects}
              />
            </div>
          );
        })}
    </div>
  );
};

export default StudentProgress;
