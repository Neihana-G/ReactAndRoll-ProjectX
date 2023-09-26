import styles from "./HelpNotification.module.css";

export default function HelpNotification({ name, gender, icon, datetime }) {
    return (
        <div className={styles.main}>
            <input type="checkbox" className={styles.checkbox}></input>
            <div className={styles.notificationBody}>
                <img src="/images/students/AidenAndrews.png" />
                <p>Andrew needs help with his project.</p>
                <div className={styles.timestamp}>
                    <p>TUE 28 April 2023</p>
                    <p>10:43am</p>
                </div>
            </div>
        </div>
    );
}
