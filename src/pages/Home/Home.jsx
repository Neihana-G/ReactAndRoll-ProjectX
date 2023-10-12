import HomeHeader from "../../Components/common/HomeHeader";
import HomePageButtons from "../../Components/common/HomePageButtons";
import BlueBigFooter from "../../Components/common/BlueBigFooter";
import styles from "./Home.module.css";
import projectImg1 from "../../assets/Home/laptop1.png";
import img1 from "../../assets/Home/animation.png";
import img2 from "../../assets/Home/augreality.png";
import img3 from "../../assets/Home/chatbots.png";
import img4 from "../../assets/Home/animation.png";

export default function Home() {
    return (
        <div>
            <HomeHeader signedIn={false} />
            <div className={styles.heroImage}>
                <div className={styles.heroContainer}>
                    <div>
                        <h2>
                            Prepare young minds for a better{" "}
                            <span style={{ color: "#42C0F6" }}>future.</span>
                        </h2>
                        <p>
                            Let us help you advance students in Digital
                            Technologies and other learning areas with our
                            project-based learning programme.
                        </p>
                    </div>
                    <div className={styles.heroBtnContainer}>
                        <HomePageButtons text="LEARN MORE" width={"25%"} />
                        <HomePageButtons
                            style="fill"
                            text="SIGN UP"
                            width={"25%"}
                        />
                    </div>
                </div>
            </div>
            <section className={styles.section_2}>
                <div className={styles.sec2_container}>
                    <div>
                        <h3>What we offer</h3>
                        <p>
                            The Creative Problem Solving programme is series of
                            digital creation projects aimed to encourage
                            self-motivation and student agency, designed by New
                            Zealand’s leading IT industry experts and schools.
                        </p>
                        <h4>What will students create?</h4>
                        <div className={styles.projectImageWrapper}>
                            <img src={img1} alt="firstImg" />
                            <img src={img2} alt="firstImg" />
                            <img src={img3} alt="firstImg" />
                            <img src={img4} alt="firstImg" />
                        </div>
                    </div>
                    <div style={{ margin: "auto" }}>
                        <img
                            className={styles.laptopImg}
                            src={projectImg1}
                            alt="Projects"
                        />
                    </div>
                </div>
            </section>

            <BlueBigFooter />
        </div>
    );
}
