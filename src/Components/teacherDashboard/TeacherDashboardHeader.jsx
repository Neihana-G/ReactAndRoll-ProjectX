import styles from "./TeacherDashboardHeader.module.css";
import logo from "../../assets/NavBar/LevelUpWorks-blue.png";
import nzFlag from "../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../assets/NavBar/MaoriFlag.png";

export default function TeacherDashboardHeader() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />

            <div className={styles.buttonWrapper}>
                <button>Help Centre</button>
                <button className={styles.buttonBlueColour}>
                    More Projects
                </button>
                <div className={styles.flagImages}>
                    <img src={nzFlag} alt="NZ Flag" />
                    <img src={maoriFlag} alt="maori-flag" />
                </div>
            </div>
        </header>
    );
}
