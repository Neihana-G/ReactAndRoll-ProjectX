import { useEffect, useState } from "react";
import styles from "./StudentCards.module.css";

const StudentProfiles = () => {
  //  defines the StudentProfiles functional component. It uses the useState hook to
  // manage the users state, which will store data retrieved from an API
  const [users, setUsers] = useState();

  useEffect(function () {
    // useEffect hook makes a network request to fetch data from an API when the component
    // is mounted. The fetched data is stored in the users state variable.
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
          // If users is truthy (i.e., data has been fetched), the component maps over the
          // array of users and renders a profile card for each user.
          return (
            <div className={styles.studentCard}>
              <img
                className={styles.studentPhoto}
                src={user.profile_pic}
                alt="Student 1"
              />
              <h3>{user.name}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default StudentProfiles;
