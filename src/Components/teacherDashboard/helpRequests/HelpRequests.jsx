import styles from "./HelpRequests.module.css";

export default function HelpRequests() {
    return (
        <div className={styles.helpBody}>
            <div className={styles.helpWrapper}>
                <div className={styles.helpMainContent}>
                    <h3>HELP REQUESTS</h3>
                    <div className={styles.actionButtons}>
                        <button>REPLY</button>
                        <button>MARK AS DONE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
