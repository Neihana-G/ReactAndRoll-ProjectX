import styles from "./HomeHeader.module.css";
import logo from "../../assets/NavBar/LevelUpWorks-white.png";
import defaultAvatar from "../../assets/NavBar/Avatar-white.png";
import { NavLink } from "react-router-dom";
import nzFLag from "../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../assets/NavBar/MaoriFlag.png";

export default function HomeHeader(props) {
    return (
        <div className={styles.homeHeader}>
            <div className={styles.container}>
                <img src={logo} alt="home-logo" />
            </div>
            <div className={styles.navlinks}>
                <NavLink>Home</NavLink>
                <NavLink>Projects</NavLink>
                <NavLink>Teachers</NavLink>
            </div>
            <div className={styles.loginContainer}>
                <div>
                    <p style={{ fontSize: "11px" }}>LANG</p>
                    <img src={nzFLag} alt="NZ-Flag" />
                    <img src={maoriFlag} alt="NZ-Flag" />
                </div>
                <div>
                    {props.signedIn ? (
                        <>
                            <img
                                src="/images/teachers/JasminaSalvador.png"
                                alt="profile"
                            />
                            <p>{props.teacherName}</p>
                        </>
                    ) : (
                        <>
                            <img src={defaultAvatar} alt="profile" />
                            <p>REGISTER | LOG IN</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
