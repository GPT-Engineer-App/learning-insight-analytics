import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import VideoCall from "./pages/VideoCall.jsx";
import NoteTaking from "./pages/NoteTaking.jsx";
import ClassroomManagement from "./pages/ClassroomManagement.jsx";
import AITeacher from "./pages/AITeacher.jsx";
import TestSystem from "./pages/TestSystem.jsx";
import StudentList from "./pages/StudentList.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/video-call" element={<VideoCall />} />
        <Route exact path="/note-taking" element={<NoteTaking />} />
        <Route exact path="/classroom-management" element={<ClassroomManagement />} />
        <Route exact path="/ai-teacher" element={<AITeacher />} />
        <Route exact path="/test-system" element={<TestSystem />} />
        <Route exact path="/student-list" element={<StudentList />} />
      </Routes>
    </Router>
  );
}

export default App;