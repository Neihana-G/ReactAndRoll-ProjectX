import styles from "./ProjectLibrary.module.css";
import BlueNavBar from "../../Components/common/BlueNavBar";
import Footer from "../../Components/common/BlueBigFooter";
import React, { useState, useEffect, useRef } from "react";

export default function ProjectLibrary() {
  // ------------------------------ State Variables ------------------------------

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [projects, setProjects] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedSubscription, setSelectedSubscription] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState([]);

  // ------------------------------ Constants ------------------------------

  const difficulties = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
  const pages = ["5", "10", "All"];
  const page5Ref = useRef();

  // ------------------------------ Event Handlers ------------------------------

  // When a user clicks one of the page options
  const handlePageClick = (index) => {
    setCurrentPage(index); //sets the currently selected page

    if (pages[index] === "All") {
      //checks if the selected page is "All"
      //If it is "All", it is displaying all projects
      //updates 'filterProjects' which is a function that filters based on selected filters
      setFilteredProjects(filterProjects());
    } else {
      const numProjectsToShow = parseInt(pages[index]); //converts the selected page number into integer
      setFilteredProjects(filterProjects().slice(0, numProjectsToShow));
      //using flice to extract only the first selected number of projects (that have been filtered)
    }
  };

  const handleSubscription = (subscription) => {
    setSelectedSubscription(
      (
        prev //prev represents the previous state of the selectedSubscription array
      ) =>
        prev.includes(subscription) //checks if the previous state already has the clicked subscription
          ? prev.filter((item) => item !== subscription) //if it is in there, then the code is recognising that the user is deselecting
          : //and removes from the list as filter creates a new array
            [...prev, subscription] //if it isn't there, the code is recognising that the user is checking the checkbox
      //creates a new array that has previous state + selected subscription
    );
  }; //the result is passed to setSelectedSubscription

  const handleActivity = (activity) => {
    setSelectedActivity((prev) =>
      prev.includes(activity)
        ? prev.filter((item) => item !== activity)
        : [...prev, activity]
    );
  };

  const handleDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
  }; //updates selectedDifficulty with the value of the clicked difficulty

  const handleLevel = (range) => {
    setSelectedLevel((prev) =>
      prev.includes(range)
        ? prev.filter((item) => item !== range)
        : [...prev, range]
    );
  };

  const handleSubject = (subject) => {
    setSelectedSubject((prev) =>
      prev.includes(subject)
        ? prev.filter((item) => item !== subject)
        : [...prev, subject]
    );
  };

  const handleScrollToTop = () => {
    //window is the browser's object
    window.scrollTo({ top: 0, behavior: "smooth" });
    //window.scrollTo scrolls the page to a specific position which is to top
  };

  // ------------------------------ Filter Function ------------------------------

  const filterProjects = () => {
    //initialising filteredProjects as the entire list of projects
    //prevents the projects from being directly modified
    let filteredProjects = projects;

    if (selectedDifficulty !== "All") {
      filteredProjects = filteredProjects.filter(
        (project) => project.difficulty === selectedDifficulty
      ); //only include projects with the selected difficulty
    }

    if (
      //if one or more subscriptions are selected
      selectedSubscription.length > 0 &&
      !selectedSubscription.includes("All")
    ) {
      filteredProjects = filteredProjects.filter((project) =>
        selectedSubscription.includes(project.subscription)
      ); //filters so thay only projects with selected subscription are included in filteredProjects
    }

    if (selectedActivity.length > 0 && !selectedActivity.includes("All")) {
      filteredProjects = filteredProjects.filter((project) =>
        selectedActivity.includes(project.activity_type)
      );
    }

    if (selectedLevel.length > 0 && !selectedLevel.includes("All")) {
      filteredProjects = filteredProjects.filter((project) => {
        //for loop to iterate over each selected level range to check if the project's year level falls within rage
        for (const range of selectedLevel) {
          const [minLevel, maxLevel] = range.split(" - ").map(Number);
          if (
            project.year_level >= minLevel &&
            project.year_level <= maxLevel
          ) {
            return true;
          }
        }
        return false;
      });
    }

    if (selectedSubject.length > 0 && !selectedSubject.includes("All")) {
      filteredProjects = filteredProjects.filter((project) =>
        selectedSubject.includes(project.subject_matter)
      );
    }
    //returns the final filteredProjects after applying the filters
    return filteredProjects;
  };

  // ------------------------------ Other filter functions ------------------------------

  useEffect(() => {
    fetch("http://localhost:4000/api/projects")
      .then((response) => response.json()) //takes response from fetch request and converts to JSON format
      .then((response) => {
        setProjects(response);
        //setting projects to JSON response, which is an array of projects
        setSelectedDifficulty("BEGINNER");
        //setting default difficulty to Beginner, when page is loaded, already set at beginner
        handlePageClick(0);
        //sets the default number of projects shown to 5

        page5Ref.current.click();
        //triggers a click event on page5ref
      });
  }, []);

  useEffect(() => {
    setFilteredProjects(filterProjects());
  }, [
    selectedDifficulty,
    selectedSubscription,
    selectedActivity,
    selectedLevel,
    selectedSubject,
  ]); //if any of these change, the useEffect will run again leading to update of filteredProjects

  // JSX Structure

  return (
    <div className={styles.main}>
      <div className={styles.content_wrap}>
        <BlueNavBar className={styles.BlueNavBar}></BlueNavBar>
        <div className={styles.mainSection}>
          <div className={styles.sideMenu}>
            <p className={styles.sideHeader}>SUBSCRIPTION</p>
            <hr></hr>
            <div className={styles.checklist}>
              <input
                type={"checkbox"}
                className={styles.checkbox}
                checked={selectedSubscription.includes("Free")}
                onChange={() => handleSubscription("Free")}
              ></input>
              <label className={styles.label}>Free</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedSubscription.includes("Premium")}
                onClick={() => handleSubscription("Premium")}
              ></input>
              <label className={styles.label}>Premium</label>
            </div>
            <p className={styles.sideHeader}>ACTIVITY TYPE</p>
            <hr></hr>
            <div className={styles.checklist}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedActivity.includes("Animation")}
                onClick={() => handleActivity("Animation")}
              ></input>
              <label className={styles.label}>Animation</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedActivity.includes("Game")}
                onClick={() => handleActivity("Game")}
              ></input>
              <label className={styles.label}>Game</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedActivity.includes("Chatbot")}
                onClick={() => handleActivity("Chatbot")}
              ></input>
              <label className={styles.label}>Chatbot</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedActivity.includes("Augmented Reality")}
                onClick={() => handleActivity("Augmented Reality")}
              ></input>
              <label className={styles.label}>Augmented Reality</label>
            </div>
            <p className={styles.sideHeader}>YEAR LEVEL</p>
            <hr></hr>
            <div className={styles.checklist}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedLevel.includes("1 - 4")}
                onClick={() => handleLevel("1 - 4")}
              ></input>
              <label className={styles.label}>1 - 4</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedLevel.includes("5 - 6")}
                onClick={() => handleLevel("5 - 6")}
              ></input>
              <label className={styles.label}>5 - 6</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedLevel.includes("7 - 8")}
                onClick={() => handleLevel("7 - 8")}
              ></input>
              <label className={styles.label}>7 - 8</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedLevel.includes("9 - 13")}
                onClick={() => handleLevel("9 - 13")}
              ></input>
              <label className={styles.label}>9 - 13</label>
            </div>
            <p className={styles.sideHeader}>SUBJECT MATTER</p>
            <hr></hr>
            <div className={styles.checklist}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedSubject.includes("Computer Science")}
                onClick={() => handleSubject("Computer Science")}
              ></input>
              <label className={styles.label}>Computer Science</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedSubject.includes("Maths")}
                onClick={() => handleSubject("Maths")}
              ></input>
              <label className={styles.label}>Maths</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedSubject.includes("Science")}
                onClick={() => handleSubject("Science")}
              ></input>
              <label className={styles.label}>Science</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedSubject.includes("Language")}
                onClick={() => handleSubject("Language")}
              ></input>
              <label className={styles.label}>Language</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedSubject.includes("Art")}
                onClick={() => handleSubject("Art")}
              ></input>
              <label className={styles.label}>Art</label>
              <br />
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedSubject.includes("Music")}
                onClick={() => handleSubject("Music")}
              ></input>
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
                      onClick={() => {
                        setCurrentIndex(index);
                        handleDifficulty(difficulties[index]);
                      }}
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
                      ref={index === 0 ? page5Ref : null} // Ref for "5" button
                      //if index is equal to 0, it sets the ref to page5ref, otherwise sets the ref to null
                      className={styles.control_page}
                      onClick={() => {
                        setCurrentPage(index);
                        handlePageClick(index);
                      }}
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
              {filteredProjects &&
                filteredProjects.map((project) => {
                  return (
                    <div key={project.id} className={styles.card}>
                      <img src={project.images} alt="project" />
                      <p className={styles.description}>{project.name}</p>
                      <p className={styles.smallDescription}>
                        {project.difficulty} | {project.activity_type}
                      </p>
                    </div>
                  );
                })}
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
