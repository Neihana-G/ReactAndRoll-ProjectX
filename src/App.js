import Home from "./pages/Home/Home";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import HelpRequests from "./Components/teacherDashboard/helpRequests/HelpRequests";
import TeacherProfile from "./pages/TeacherProfile/TeacherProfile";
import ProgressTracker from "./Components/teacherDashboard/progressTracker/ProgressTracker";
import { Routes, Route, Navlink } from "react-router-dom";
import "./App.css";
import Library from "./pages/ProjectLibrary/ProjectLibrary";
import Profiles from "./pages/StudentProfileViewer/StudentProfileViewer";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/teacher-dashboard" element={<TeacherDashboard />}>
                    <Route
                        path="progress-tracker"
                        element={<ProgressTracker />}
                    ></Route>

                    <Route
                        path="help-requests"
                        element={<HelpRequests />}
                    ></Route>
                    <Route
                        path="project-submissions"
                        element={"submissions"}
                    ></Route>
                </Route>
                <Route path="project-library" element={<Library />}></Route>
                <Route path="student-profile" element={<Profiles />}></Route>
                <Route
                    path="/teacher-profile"
                    element={<TeacherProfile />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
