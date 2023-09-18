import Home from "./pages/Home/Home";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import { Routes, Route, Navlink } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/teacherDashboard" element={<TeacherDashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
