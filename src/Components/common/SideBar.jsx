import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";
import { useState } from "react";
import defaultImg from "../../assets/StudentDashboard/sendPhoto.png";
import profileImg from "../../assets/profile.png";
import settingsImg from "../../assets/settings.png";
import logoutImg from "../../assets/logout.png";
import { useAuth } from "../../auth/useAuth";

//The parent element of this prop must be Display: Flex in order to display sideway
// The pages deconsructed prop must be passed through as an array of objects including: name, router path, normal image and dark image. If one or no images are passed a defailt image will be used as a placeholder
// Example object = [{name:"name", path:"path", img:{img}, darkImg: {darkImg}}]
export default function SideBar({ pages }) {
    const { logout, userData } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [currentActiveNav, setCurrentActiveNav] = useState();
    const Navigate = useNavigate();
    const handleSidebarButton = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div
            className={`${styles.sideBar} ${
                !sidebarOpen && styles.sideBarClosed
            }`}
        >
            {/* Placeholder for Img icon in sidebar - if sideBar is closed an additional class name will be added on to change styling*/}
            <div className={styles.icon}>
                {/* Need to add profile pic image here */}
                <img src={userData?.profile_pic || "/images/default.png"} />
            </div>
            {pages.map((el, index) => {
                return (
                    <NavLink
                        key={index}
                        to={el.path}
                        className={({ isActive }) => {
                            if (isActive) {
                                setCurrentActiveNav(index);
                            }
                            console.log(currentActiveNav);
                            return isActive
                                ? `${styles.sidebarActive} ${styles.btn} ${
                                      !sidebarOpen && styles.btnClosed
                                  }`
                                : `${styles.btn} ${
                                      !sidebarOpen && styles.btnClosed
                                  }`;
                        }}
                    >
                        {/* If no image is passed through the pages prop object then show a default image

                        Must pass through both normal image and dark image in order to show the image */}

                        {el.img && el.darkImg ? (
                            <img
                                className={styles.sideBarImages}
                                src={
                                    index !== currentActiveNav
                                        ? el.img
                                        : el.darkImg
                                }
                                alt={el.name}
                            />
                        ) : (
                            <img src={defaultImg} alt={el.name} />
                        )}
                        {sidebarOpen && el.name}
                    </NavLink>
                );
            })}
            <div
                className={`${styles.openClose} ${
                    sidebarOpen && styles.openParent
                }`}
            >
                <div
                    onClick={handleSidebarButton}
                    className={`${styles.easyBtn} ${
                        !sidebarOpen ? styles.close : styles.open
                    }`}
                ></div>
            </div>
            <div className={styles.bottomOfSidebar}>
                <div
                    className={`${styles.sidebarBottomActions} ${
                        !sidebarOpen && styles.sidebarBottomActionsClosed
                    }`}
                >
                    <div onClick={() => Navigate("/teacher-profile")}>
                        <img src={profileImg} alt="Profile" />
                        <h6>Profile</h6>
                    </div>
                    <div>
                        <img src={settingsImg} alt="Settings" />
                        <h6>Settings</h6>
                    </div>
                    <div onClick={logout}>
                        <img src={logoutImg} alt="Log out" />
                        <h6>Log Out</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
