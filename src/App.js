import Home from "./pages/Home/Home";
import TempTeacherDashboard from "./pages/TempTeacherDashboard/TempTeacherDashboard";
import { Routes, Route, Navlink } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/teacherDashboard"
          element={<TempTeacherDashboard />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
