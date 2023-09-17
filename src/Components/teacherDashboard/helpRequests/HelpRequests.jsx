import styles from "./HelpRequests.module.css";
import HelpNotification from "./HelpNotification";

export default function HelpRequests() {
    return (
        <div className={styles.helpBody}>
            <div className={styles.helpWrapper}>
                <div className={styles.helpMainContent}>
                    <h3>HELP REQUESTS</h3>
                    <div className={styles.notificationWrapper}>
                        <div className={styles.actionButtons}>
                            <button>
                                <i class="fa-solid fa-reply"></i>
                                REPLY
                            </button>
                            <button>MARK AS DONE</button>
                        </div>
                        <div className={styles.notifications}>
                            <HelpNotification />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
