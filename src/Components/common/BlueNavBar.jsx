import styles from "./BlueNavBar.module.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import logoImg from "../../assets/NavBar/LevelUpWorks-white.png";
import maoriImg from "../../assets/NavBar/MaoriFlag.png";
import nzImg from "../../assets/NavBar/NZFlag.png";
import avatar from "../../assets/NavBar/Avatar-white.png";
import Home from "../../pages/Home/Home";
import Library from "../../pages/ProjectLibrary/ProjectLibrary";
import TeacherDashboard from "../../pages/TeacherDashboard/TeacherDashboard";

export default function BlueNavBar() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToLibrary = () => {
    navigate("/project-library");
  };

  const navigateToTeacher = () => {
    navigate("/teacher-dashboard");
  };

  const dropdown = document.querySelectorAll(".dropd");

  return (
    <div className={styles.body}>
      <div className={styles.navbar}>
        <img src={logoImg} className={styles.logo} />
        <ul className={styles.topMenu}>
          <li className={styles.menuSelection} onClick={navigateToHome}>
            HOME
          </li>
          <li className={styles.menuSelection} onClick={navigateToLibrary}>
            PROJECTS
          </li>

          <li className={styles.menuSelection} onClick={navigateToTeacher}>
            TEACHERS
          </li>
        </ul>
        <div className={styles.studentLanguage}>
          <div className={styles.language}>
            <a>LANG</a>
            <img src={nzImg} className={styles.nzFlag}></img>
            <img src={maoriImg} className={styles.maoriFlag}></img>
          </div>
          <div className={styles.student}>
            <img src={avatar} className={styles.profilePic}></img>
            <div className={styles.studentName}>
              RAWIRI FLETCHER
              <ul>
                <li>My Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
