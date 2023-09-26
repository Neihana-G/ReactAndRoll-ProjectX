import styles from "./StudentProfileViewer.module.css";
import BlueNavBar from "../../Components/common/BlueNavBar";
import Footer from "../../Components/common/Footer";
import studentPhoto from "../../assets/TeacherDashboard/studentProfilesSelected.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import Library from "../../pages/ProjectLibrary/ProjectLibrary";

export default function StudentProfileViewer() {
    const navigate = useNavigate();
    const navigateToProjects = () => {
        navigate("/project-library");
    };

    return (
        <>
            <div className={styles.mainProfile}>
                <BlueNavBar></BlueNavBar>
                <div className={styles.bodyProfile}>
                    <div className={styles.profileLeft}>
                        <img
                            src={studentPhoto}
                            className={styles.profilePhoto}
                        />
                        <button className={styles.editProfile}>
                            EDIT PROFILE
                        </button>
                        <button className={styles.changePhoto}>
                            CHANGE PHOTO
                        </button>
                    </div>

                    <div className={styles.profileRight}>
                        <div className={styles.nameContainer}>
                            <p className={styles.studentName}>
                                Rawiri Fletcher
                            </p>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.attributes}>
                                <p className={styles.attributesText}>School</p>
                                <p className={styles.attributesText}>Teacher</p>
                                <p className={styles.attributesText}>Course</p>
                                <p className={styles.attributesText}>
                                    Date of Birth
                                </p>
                                <p className={styles.attributesText}>
                                    Contact No
                                </p>
                                <p className={styles.attributesText}>
                                    Email Address
                                </p>
                            </div>
                            <div>
                                <p className={styles.detailsText}>
                                    Homai School
                                </p>
                                <p className={styles.detailsText}>
                                    Jasmina Salvador
                                </p>
                                <p className={styles.detailsText}>Beginner</p>
                                <p className={styles.detailsText}>
                                    25 June 2010
                                </p>
                                <p className={styles.detailsText}>
                                    022 524 63 99
                                </p>
                                <p className={styles.detailsText}>
                                    fletchy.r@gmail.com
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={navigateToProjects}
                            className={styles.toProjects}
                        >
                            Back To Projects
                        </button>
                        <Routes>
                            <Route
                                path="/project-library"
                                element={<Library />}
                            />
                        </Routes>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}
