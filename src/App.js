import Home from "./pages/Home/Home";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import HelpRequests from "./Components/teacherDashboard/helpRequests/HelpRequests";
import TeacherProfile from "./pages/TeacherProfile/TeacherProfile";
import { Routes, Route, Navlink } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>

                <Route path="/teacher-dashboard" element={<TeacherDashboard />}>
                    <Route path="progress-tracker" element={"Tracker"}></Route>
                    <Route path="student-profile" element={"Profiles"}></Route>
                    <Route
                        path="help-requests"
                        element={<HelpRequests />}
                    ></Route>
                    <Route
                        path="project-submissions"
                        element={"submissions"}
                    ></Route>
                    <Route path="project-library" element={"library"}></Route>
                </Route>
                <Route
                    path="/teacher-profile"
                    element={<TeacherProfile />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
