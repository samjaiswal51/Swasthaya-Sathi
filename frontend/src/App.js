import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import FamilyDashboard from './pages/FamilyDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import MedicalSummaryPage from "./pages/MedicalSummaryPage";
import HealthTimeline from "./pages/HealthTimeline";
import PatientDashboard from './pages/PatientDashboard';
import DoctorListPage from './pages/DoctorListPage';
import ChatRoom from './pages/ChatRoom'; // ✅ Missing import added here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard/patient" element={<PatientDashboard />} />
        <Route path="/dashboard/family" element={<FamilyDashboard />} />
        <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
        <Route path="/patient/medical-summary" element={<MedicalSummaryPage />} />
        <Route path="/patient/health-timeline" element={<HealthTimeline />} />
        <Route path="/patient/chat-doctor" element={<DoctorListPage />} />
        <Route path="/chatroom/:doctorId" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
