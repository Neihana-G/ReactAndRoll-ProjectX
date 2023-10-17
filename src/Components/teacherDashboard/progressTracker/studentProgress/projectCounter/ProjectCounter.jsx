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
// import { useEffect, useState } from "react";
// import styles from "./ProjectCounter.module.css";

// const ProjectCounter = () => {
//   const [users, setUsers] = useState();

//   useEffect(function () {
//     fetch("http://localhost:4000/api/users")
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response);
//         setUsers(response);
//       });
//   }, []);

//   return (
//     <div className={styles.studentProfileWrapper}>
//       {users &&
//         users.map(function (user) {
//           return (
//             <div className={styles.studentCard}>
//               <img
//                 className={styles.studentPhoto}
//                 src={user.profile_pic}
//                 alt="Student 1"
//               />
//               <h3>{user.name}</h3>
//             </div>
//           );
//         })}

//     </div>
//   );
// };

// export default ProjectCounter;
