import HomeHeader from "../../Components/common/HomeHeader";
import styles from "./TeacherProfile.module.css";
import BlueBigFooter from "../../Components/common/BlueBigFooter";
export default function TeacherProfile() {
    return (
        <div>
            <HomeHeader />
            <div className={styles.profileBody}>
                <div className={styles.mainContent}>
                    <div className={styles.teacherInfo}>
                        <div className={styles.profileDisplayLeft}>
                            <img
                                src="/images/teachers/JasminaSalvador.png"
                                alt=""
                                teacher-profile
                            />
                            <button>Edit Profile</button>
                            <button>Change Photo</button>
                            <button>Settings</button>
                        </div>
                        <div className={styles.profileDisplayRight}>
                            <h2>Teacher Name</h2>
                            <div>
                                <p className={styles.infoType}>School</p>
                                <p className={styles.info}>Homai School</p>
                            </div>
                            <div>
                                <p className={styles.infoType}>Date Of Birth</p>
                                <p className={styles.info}>25 June 1986</p>
                            </div>
                            <div>
                                <p className={styles.infoType}>Contact No.</p>
                                <p className={styles.info}>027 754 28 00</p>
                            </div>
                            <div>
                                <p className={styles.infoType}>Email Address</p>
                                <p className={styles.info}>teacher@email.com</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.backButtons}>
                        <button style={{ background: "#43c0f6" }}>
                            Back to projects
                        </button>
                        <button>back to dashboard</button>
                    </div>
                </div>
            </div>
            <BlueBigFooter />
        </div>
    );
}
