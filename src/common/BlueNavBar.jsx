import styles from "./BlueNavBar.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/NavBar/LevelUpWorks-white.png";
import maoriImg from "../assets/NavBar/MaoriFlag.png";
import nzImg from "../assets/NavBar/NZFlag.png";
import avatar from "../assets/NavBar/Avatar-white.png";

export default function BlueNavBar() {
  return (
    <div className={styles.body}>
      <div className={styles.navbar}>
        <img src={logoImg} className={styles.logo} />
        <ul className={styles.topMenu}>
          <li className={styles.menuSelection}>Home</li>
          <li className={styles.menuSelection}>Projects</li>
          <li className={styles.menuSelection}>Teachers</li>
        </ul>
        <div className={styles.studentLanguage}>
          <div className={styles.language}>
            <a>LANG</a>
            <img src={nzImg} className={styles.nzFlag}></img>
            <img src={maoriImg} className={styles.maoriFlag}></img>
          </div>
          <div className={styles.student}>
            <img src={avatar} className={styles.profilePic}></img>
            <p className={styles.studentName}>RAWIRI FLETCHER</p>
          </div>
        </div>
      </div>
    </div>
  );
}
