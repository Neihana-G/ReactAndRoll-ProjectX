import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.main_footer}>
      <div className={styles.Company}>
        <p>COMPANY</p>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Partners</li>
        </ul>
      </div>
      <div className={styles.Courses}>
        <p>COURSES</p>
        <ul>
          <li>Register</li>
          <li>Login</li>
          <li>Projects</li>
          <li>Teachers</li>
          <li>Parents</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className={styles.Support}>
        <p>SUPPORT</p>
        <ul>
          <li>FAQs</li>
          <li>Helpdesk</li>
          <li>Contacr Us</li>
        </ul>
      </div>
      <div className={styles.Legal}>
        <p>LEGAL</p>
        <ul>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="LevelUp">
        <h5>LevelUp Works</h5>
        <p>
          LevelUp Works in an Auckland-based
          <br />
          enterprise dedicated to developing game-
          <br />
          based learning software to help teachers in
          <br />
          response to the New Zealand Digital
          <br />
          Technologies & Hangarau Matihiko.
          <br />
          alan@levelupworks.com
          <br />
          (021) 668 185
        </p>
      </div>
    </div>
  );
}
