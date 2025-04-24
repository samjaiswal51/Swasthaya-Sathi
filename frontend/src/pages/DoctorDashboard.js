import { useNavigate } from "react-router-dom";

export default function DoctorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-50 p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Doctor Dashboard 🏥</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div
          onClick={() => navigate("/doctor/create-profile")}
          className="p-4 bg-white rounded-xl shadow-md cursor-pointer hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">👨‍⚕️ Create Your Profile</h2>
          <p className="text-gray-700">Add your specialization, experience, hospital, and image.</p>
        </div>

        <div
          onClick={() => navigate("/doctor/chat-with-client")}
          className="p-4 bg-white rounded-xl shadow-md cursor-pointer hover:shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-2">💬 Chat with Clients</h2>
          <p className="text-gray-700">Chat with assigned patients and receive notifications.</p>
        </div>
      </div>
    </div>
  );
}
