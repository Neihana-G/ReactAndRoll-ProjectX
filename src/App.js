import Home from "./pages/Home/Home";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import HelpRequests from "./Components/teacherDashboard/helpRequests/HelpRequests";
import TeacherProfile from "./pages/TeacherProfile/TeacherProfile";
import ProgressTracker from "./Components/teacherDashboard/progressTracker/ProgressTracker";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Library from "./pages/ProjectLibrary/ProjectLibrary";
import Profiles from "./pages/StudentProfileViewer/StudentProfileViewer";
import StudentProfiles from "./Components/teacherDashboard/studentProfiles/StudentProfiles";
import ProtectedRoute from "./auth/ProtectedRoute";
// import LogInModal from "./Components/home/LogInModal";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}>
                    {/* <Route path='/login' element={<LogInModal/>}></Route> */}
                </Route>
                <Route exact element={<ProtectedRoute />}>
                    <Route
                        path="/teacher-dashboard"
                        element={<TeacherDashboard />}
                    >
                        <Route
                            path="progress-tracker"
                            element={<ProgressTracker />}
                        ></Route>
                        <Route
                            path="student-profiles"
                            element={<StudentProfiles />}
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
                </Route>

                <Route path="/project-library" element={<Library />}></Route>

                <Route path="/student-profile" element={<Profiles />}></Route>

                <Route exact element={<ProtectedRoute />}>
                    <Route
                        path="/teacher-profile"
                        element={<TeacherProfile />}
                    ></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
