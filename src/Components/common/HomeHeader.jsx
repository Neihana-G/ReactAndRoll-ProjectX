import styles from "./HomeHeader.module.css";
import logo from "../../assets/NavBar/LevelUpWorks-white.png";
import defaultAvatar from "../../assets/NavBar/Avatar-white.png";
import { NavLink, useNavigate } from "react-router-dom";
import nzFLag from "../../assets/NavBar/NZFlag.png";
import maoriFlag from "../../assets/NavBar/MaoriFlag.png";
import { useAuth } from "../../auth/useAuth";
import { useState, useEffect } from "react";

export default function HomeHeader(props) {
    const [showLogout, setShowLogout] = useState(false);
    const { authed, userData, logout } = useAuth();
    const Navigate = useNavigate();

    useEffect(() => {
        console.log(userData);
    }, []);

    return (
        <div className={styles.homeHeader}>
            <div className={styles.container}>
                <img
                    className={styles.homeImg}
                    onClick={() => {
                        Navigate("/");
                    }}
                    src={logo}
                    alt="home-logo"
                />
            </div>
            <div className={styles.navlinks}>
                <NavLink to="/">Home</NavLink>
                <NavLink>Projects</NavLink>
                <NavLink to="/teacher-dashboard/progress-tracker">
                    Teachers
                </NavLink>
            </div>
            <div
                className={styles.loginContainer}
                onMouseLeave={() => {
                    setShowLogout(false);
                }}
            >
                <div>
                    <p style={{ fontSize: "11px" }}>LANG</p>
                    <img src={nzFLag} alt="NZ-Flag" />
                    <img src={maoriFlag} alt="NZ-Flag" />
                </div>
                <div className={styles.profileAction}>
                    {authed != "" ? (
                        <>
                            <img
                                style={{ borderRadius: "50%" }}
                                src={
                                    userData?.profile_pic ||
                                    "/images/default.png"
                                }
                                alt="profile"
                            />
                            <p
                                onMouseEnter={() => {
                                    setShowLogout(true);
                                }}
                                onClick={() => {
                                    Navigate(
                                        authed === "teacher"
                                            ? "/teacher-profile"
                                            : "/student-profile"
                                    );
                                }}
                            >
                                {userData?.name?.toUpperCase()}
                            </p>
                            {showLogout && (
                                <div className={styles.logout}>
                                    <p onClick={logout}>Logout</p>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <img src={defaultAvatar} alt="profile" />
                            <p onClick={props.profileFunction}>
                                REGISTER | LOG IN
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
