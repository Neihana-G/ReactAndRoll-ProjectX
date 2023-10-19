import styles from "./StudentProfileViewer.module.css";
import BlueNavBar from "../../Components/common/HomeHeader";
import Footer from "../../Components/common/BlueSmallFooter";
import { Routes, Route, useNavigate } from "react-router-dom";
import Library from "../../pages/ProjectLibrary/ProjectLibrary";
import { useAuth } from "../../auth/useAuth";
import moment from "moment";
import { useState, useEffect } from "react";

export default function StudentProfileViewer() {
  const { userData } = useAuth();
  const [teachers, setTeachers] = useState([]);
  const studentPhotoUrl = userData.profile_pic || "/images/default.png";
  const studentName = userData.name || "Student Name";
  const studentSchool = userData.school || "Student School";
  const studentCourse = userData.course || "Student Course";
  const formattedBday = moment(userData.date_of_birth).format("YYYY-MM-DD");
  const studentContact = userData.contact_number || "Student's Contact";
  const studentEmail = userData.email || "Student's Email";
  const studentTeacherId = userData.teacher_id;
  const navigate = useNavigate();
  const navigateToProjects = () => {
    navigate("/project-library");
  };

  useEffect(() => {
    fetch("http://localhost:4000/api/student-teacher")
      .then((response) => response.json())
      .then((response) => {
        setTeachers(response);
        console.log(response);
      });
  }, []);

  let teacherName = "Jasmina Salvador"; // Default name

  for (let i = 0; i < teachers.length; i++) {
    console.log(userData.teacher_id);
    if (teachers[i].teacher_id === studentTeacherId) {
      teacherName = teachers[i].name;
      break; // Found a match, exit the loop
    }
  }

  return (
    <>
      <div className={styles.mainProfile}>
        <BlueNavBar></BlueNavBar>
        <div className={styles.bodyProfile}>
          <div className={styles.profileLeft}>
            <img src={studentPhotoUrl} className={styles.profilePhoto} />
            <button className={styles.editProfile}>EDIT PROFILE</button>
            <button className={styles.changePhoto}>CHANGE PHOTO</button>
          </div>

          <div className={styles.profileRight}>
            <div className={styles.nameContainer}>
              <p className={styles.studentName}>{studentName}</p>
            </div>
            <div className={styles.details}>
              <div className={styles.attributes}>
                <p className={styles.attributesText}>School</p>
                <p className={styles.attributesText}>Teacher</p>
                <p className={styles.attributesText}>Course</p>
                <p className={styles.attributesText}>Date of Birth</p>
                <p className={styles.attributesText}>Contact No</p>
                <p className={styles.attributesText}>Email Address</p>
              </div>
              <div>
                <p className={styles.detailsText}>{studentSchool}</p>
                <p className={styles.detailsText}>{teacherName}</p>
                <p className={styles.detailsText}>{studentCourse}</p>
                <p className={styles.detailsText}>{formattedBday}</p>
                <p className={styles.detailsText}>{studentContact}</p>
                <p className={styles.detailsText}>{studentEmail}</p>
              </div>
            </div>
            <button onClick={navigateToProjects} className={styles.toProjects}>
              Back To Projects
            </button>
            <Routes>
              <Route path="/project-library" element={<Library />} />
            </Routes>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
