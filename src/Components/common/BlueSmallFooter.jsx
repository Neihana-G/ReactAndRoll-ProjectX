import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.main_footer}>
      <div className={styles.Company}>
        <h4 className={styles.footerHeader}>COMPANY</h4>
        <p className={styles.footerSelections}>About Us</p>
        <p className={styles.footerSelections}>Careers</p>
        <p className={styles.footerSelections}>Partners</p>
      </div>
      <div className={styles.Courses}>
        <h4 className={styles.footerHeader}>COURSES</h4>
        <p className={styles.footerSelections}>Register</p>
        <p className={styles.footerSelections}>Login</p>
        <p className={styles.footerSelections}>Projects</p>
        <p className={styles.footerSelections}>Teachers</p>
        <p className={styles.footerSelections}>Parents</p>
        <p className={styles.footerSelections}>Resources</p>
      </div>
      <div className={styles.Support}>
        <h4 className={styles.footerHeader}>SUPPORT</h4>
        <p className={styles.footerSelections}>FAQs</p>
        <p className={styles.footerSelections}>Helpdesk</p>
        <p className={styles.footerSelections}>Contacr Us</p>
      </div>
      <div className={styles.Legal}>
        <h4 className={styles.footerHeader}>LEGAL</h4>
        <p className={styles.footerSelections}>Terms & Conditions</p>
        <p className={styles.footerSelections}>Privacy Policy</p>
      </div>
      <div className={styles.LevelUp}>
        <h4 className={styles.footerHeader}>LevelUp Works</h4>
        <p className={styles.footerSelections}>
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
