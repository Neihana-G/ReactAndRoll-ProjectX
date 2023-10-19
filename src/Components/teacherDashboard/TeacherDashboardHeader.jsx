import styles from "./TeacherDashboardHeader.module.css";
import logo from "../../assets/NavBar/LevelUpWorks-blue.png";
import nzFlag from "../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../assets/NavBar/MaoriFlag.png";
import { useNavigate } from "react-router-dom";

export default function TeacherDashboardHeader() {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <img
                className={styles.headerImage}
                src={logo}
                alt="logo"
                onClick={() => {
                    navigate("/");
                }}
            />
            {/* <img src={logo} alt="logo" /> */}
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
