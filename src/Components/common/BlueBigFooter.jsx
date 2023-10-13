import styles from "./BlueBigFooter.module.css";

export default function BlueBigFooter() {
    return (
        <div className={styles.blueFooter}>
            <div className={styles.container}>
                <div>
                    <h3>COMPANY</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Partners</p>
                </div>
                <div>
                    <h3>COURSES</h3>
                    <p>Register</p>
                    <p>Login</p>
                    <p>Projects</p>
                    <p>Teachers</p>
                    <p>Parents</p>
                    <p>Resources</p>
                </div>
                <div>
                    <h3>SUPPORT</h3>
                    <p>FAQs</p>
                    <p>Helpdesk</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <h3>LEGAL</h3>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className={styles.levelUp}>
                    <h3>LevelUp Works</h3>
                    <p>
                        LevelUp Works LevelUp Works is an Auckland-based
                        enterprise dedicated to developing game-based learning
                        software to help teachers in response to the New Zealand
                        Digital Technologies & Hangarau Matihiko. <br />
                        alan@levelupworks.com <br /> (021) 668 185
                    </p>
                </div>
            </div>
        </div>
    );
}
