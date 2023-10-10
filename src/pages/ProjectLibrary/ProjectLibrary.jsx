import styles from "./ProjectLibrary.module.css";
import BlueNavBar from "../../Components/common/BlueNavBar";
import Footer from "../../Components/common/Footer";
import ProjectLibraryBody from "../../Components/ProjectLibrary/ProjectLibraryBody";
import { useState } from "react";
import React from "react";

export default function ProjectLibrary() {
  const difficulties = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
  const [currentIndex, setCurrentIndex] = useState(0);
  //currentIndex = currently selected index, starting with index 0
  const [currentPage, setCurrentPage] = useState(0);
  const pages = ["5", "10", "All"];
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.main}>
      <div className={styles.content_wrap}>
        <BlueNavBar className={styles.BlueNavBar}></BlueNavBar>
        <div className={styles.mainSection}>
          <div className={styles.sideMenu}>
            <p className={styles.sideHeader}>SUBSCRIPTION</p>
            <hr></hr>
            <div className={styles.checklist}>
              <input type={"checkbox"} className={styles.checkbox}></input>
              <label className={styles.label}>Free</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>Premium</label>
            </div>
            <p className={styles.sideHeader}>ACTIVITY TYPE</p>
            <hr></hr>
            <div className={styles.checklist}>
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>Animation</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>Game</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>Chatbot</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>Augmented Reality</label>
            </div>
            <p className={styles.sideHeader}>YEAR LEVEL</p>
            <hr></hr>
            <div className={styles.checklist}>
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>1 - 4</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>5 - 6</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>7 - 8</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>9 - 13</label>
            </div>
            <p className={styles.sideHeader}>SUBJECT MATTER</p>
            <hr></hr>
            <div className={styles.checklist}>
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>Computer Science</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>Maths</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>Science</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>Language</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>Art</label>
              <br />
              <input type="checkbox" className={styles.checkbox}></input>
              <label className={styles.label}>Music</label>
            </div>
          </div>
          <div className={styles.rightSection}>
            <h2 className={styles.projects}>PROJECTS</h2>
            <p className={styles.welcome}>
              Welcome to the project library. You can use the filters on the
              right to help you search for specific projects.
            </p>
            <div className={styles.segmented_container}>
              <div className={styles.control_container}>
                {difficulties.map((difficulty, index) => {
                  return (
                    <div
                      className={styles.control_difficulty}
                      onClick={() => setCurrentIndex(index)}
                      //setting the current index according to the index on which we are on
                      //e.g. if I select intermediate, I am getting index 1
                    >
                      {currentIndex === index && (
                        //if currentIndex == index, then only we want to render out the bg change
                        <div className={styles.control_difficulty_bg}></div>
                      )}

                      <div className={styles.control_difficulty_text}>
                        {difficulty}
                      </div>
                    </div>
                  );
                })}
              </div>
              <h2 className={styles.show}>Show</h2>
              <div className={styles.control_container}>
                {pages.map((page, index) => {
                  return (
                    <div
                      className={styles.control_page}
                      onClick={() => setCurrentPage(index)}
                    >
                      {currentPage === index && (
                        <div className={styles.control_difficulty_bg}></div>
                      )}

                      <div className={styles.control_difficulty_text}>
                        {page}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.projectImages}>
              <div className={styles.rowContainer}>
                <div className={styles.oneContainer}>
                  <img></img>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <button className={styles.backToTop} onClick={handleScrollToTop}>
              Back To Top
            </button>
          </div>
        </div>
      </div>
      <Footer className={styles.Footer}></Footer>
    </div>
  );
}