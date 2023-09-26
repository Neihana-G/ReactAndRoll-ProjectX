import ProgressTracker from "../../Components/teacherDashboard/progressTracker/ProgressTracker";
import StudentProgress from "../../Components/teacherDashboard/progressTracker/studentProgress/StudentProgress";
import "./TempTeacherDashboard.css";

export default function TempTeacherDashboard() {
  return (
    <div id="background-wrapper">
      <div id="header-bar">HEADER BAR</div>
      <div id="sidebar" className="grid-item narrow">
        SIDE BAR
      </div>
      <div id="tracker-border" className="grid-item wide">
        <div id="tracker-container" className="grid-item">
          <ProgressTracker />
          <StudentProgress />
        </div>
        tracker border
      </div>
      <div id="footer-bar">FOOTER BAR </div>
    </div>
  );
}
