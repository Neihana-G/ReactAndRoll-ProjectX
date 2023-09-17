import { Outlet } from "react-router-dom";
import TeacherDashboardHeader from "../../Components/teacherDashboard/TeacherDashboardHeader";
import SideBar from "../../Components/common/SideBar";
import styles from "./TeacherDashboard.module.css";
import progressTrackerImg from "../../assets/TeacherDashboard/progressTracker.png";
import progressTrackerImgSelected from "../../assets/TeacherDashboard/progressTrackerSelected.png";
import studentProfilesImg from "../../assets/TeacherDashboard/studentProfiles.png";
import studentProfilesImgSelected from "../../assets/TeacherDashboard/studentProfilesSelected.png";
import helpRequestsImg from "../../assets/TeacherDashboard/helpRequests.png";
import helpRequestsImgSelected from "../../assets/TeacherDashboard/helpRequestsSelected.png";
import submissionsImgs from "../../assets/TeacherDashboard/projectSubmissions.png";
import submissionsImgsSelected from "../../assets/TeacherDashboard/projectSubmissionsSelected.png";
import projectLibraryImg from "../../assets/TeacherDashboard/projectLibrary.png";
import projectLibraryImgSelected from "../../assets/TeacherDashboard/projectLibrarySelected.png";

export default function TeacherDashboard() {
    const sidebarPaths = [
        {
            name: "Progress Tracker",
            path: "progress-tracker",
            img: progressTrackerImg,
            darkImg: progressTrackerImgSelected,
        },
        {
            name: "Student Profiles",
            path: "student-profile",
            img: studentProfilesImg,
            darkImg: studentProfilesImgSelected,
        },
        {
            name: "Help Requests",
            path: "help-requests",
            img: helpRequestsImg,
            darkImg: helpRequestsImgSelected,
        },
        {
            name: "Project Submissions",
            path: "project-submissions",
            img: submissionsImgs,
            darkImg: submissionsImgsSelected,
        },
        {
            name: "Project Library",
            path: "project-library",
            img: projectLibraryImg,
            darkImg: projectLibraryImgSelected,
        },
    ];
    return (
        <div className={styles.main}>
            <TeacherDashboardHeader />
            <div style={{ display: "flex" }}>
                <SideBar pages={sidebarPaths} style={{ height: "90vh" }} />
                <Outlet />
            </div>
        </div>
    );
}
