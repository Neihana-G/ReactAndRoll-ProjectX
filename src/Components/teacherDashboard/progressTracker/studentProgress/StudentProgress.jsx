import { useEffect, useState } from "react";
// This line imports the useEffect and useState hooks from the "react" library
import styles from "./StudentProgress.module.css";
import ProjectCounter from "./projectCounter/ProjectCounter";
//This line imports the ProjectCounter component

const StudentProgress = () => {
  // This defines the StudentProgress functional component. It uses the useState
  // hook to manage the userprojects state, which will store data retrieved from an AP
  const [userprojects, setUserprojects] = useState();

  useEffect(function () {
    // the useEffect hook makes a network request to fetch data from an API when
    // the component is mounted. The fetched data is stored in the userprojects state variable.
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
            // The ProjectCounter component is used within the mapping function. It passes the
            // completedProjects prop to display the number from projectcounter
          );
        })}
    </div>
  );
};

export default StudentProgress;
