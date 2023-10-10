// import styles from "./Projects.module.css";
// import { useEffect, useState } from "react";

// export default function Projects() {
//   const [projects, setProjects] = useState();
//   useEffect(function () {
//     fetch("http://localhost:4000/api/projects")
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response);
//         setProjects(response);
//       });
//   }, []);

//   return (
//     <>
//       <div className={styles.container}>
//         {projects &&
//           projects.map(function (project) {
//             return (
//               <div key={project.id} className={styles.card}>
//                 <img src={project.images} alt="project"></img>
//                 <p>{project.description}</p>
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// }
