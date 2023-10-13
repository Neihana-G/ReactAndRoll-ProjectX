import styles from "./HelpNotification.module.css";
import moment from "moment";
export default function HelpNotification({
    id,
    name,
    icon,
    datetime,
    handleCheckbox,
}) {
    const first_name = name.split(" ")[0];
    const date = moment(datetime).format("DD/MM/YYYY");
    const time = moment(datetime).format("HH:mm:ss");
    const timeString12hr = new Date(
        "1970-01-01T" + time + "Z"
    ).toLocaleTimeString("en-US", {
        timeZone: "UTC",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
    });
    return (
        <div className={styles.main}>
            <input
                onChange={handleCheckbox}
                type="checkbox"
                className={styles.checkbox}
                value={id}
            ></input>
            <div className={styles.notificationBody}>
                <img src={icon} />
                <p>{first_name.toUpperCase()} needs help with their project.</p>
                <div className={styles.timestamp}>
                    {/* <p>TUE 28 April 2023</p> */}
                    <p>{date}</p>
                    <p>{timeString12hr}</p>
                </div>
            </div>
        </div>
    );
}
