import styles from "./LoginModal.module.css";
import LoginComponent from "./LoginComponent";
import studentImage from "../../assets/LoginSignup/students.png";
import teacherImage from "../../assets/LoginSignup/teachers.png";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogInModal({ close }) {
    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalContainer}>
                <FontAwesomeIcon
                    onClick={close}
                    className={styles.close}
                    icon={faXmark}
                />
                <LoginComponent headerImage={studentImage} header="Students" />
                <div className={styles.divider} />
                <LoginComponent headerImage={teacherImage} header="Teachers" />
            </div>
        </div>
    );
}
