import ProgressTracker from "../../common/teacherDashboard/progressTracker/ProgressTracker";
import "./TeacherDashboard.css";

export default function TeacherDashboard() {
  return (
    <div id="background-wrapper">
      <div id="header-bar">HEADER BAR</div>
      <div id="sidebar" className="grid-item narrow">
        SIDE BAR
      </div>
      <div id="tracker-border" className="grid-item wide">
        <div id="tracker-container" className="grid-item">
          <ProgressTracker />
        </div>
        tracker border
      </div>
      <div id="footer-bar">FOOTER BAR </div>
    </div>
  );
}
