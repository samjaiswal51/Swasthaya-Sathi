// src/pages/PatientDashboard.js

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    title: "Medical Summary",
    icon: "🩺",
    description: "Your reports, prescriptions and vitals summary will be here.",
    bg: "bg-blue-100",
  },
  {
    title: "Health Timeline",
    icon: "📅",
    description: "All your treatments, test dates and progress will appear here.",
    bg: "bg-green-100",
  },
  {
    title: "Chat with Doctor",
    icon: "💬",
    description: "Real-time communication with assigned doctors will be shown.",
    bg: "bg-yellow-100",
  },
  {
    title: "Bills & Alerts",
    icon: "🧾",
    description: "Track bills, alerts and potential fraud notifications.",
    bg: "bg-red-100",
  },
  {
    title: "Upcoming Appointments",
    icon: "📆",
    description:
      "Dr. Priya Sharma (Cardiologist) — 24th Apr, 3:00 PM — Status: Confirmed.",
    bg: "bg-purple-100",
  },
  {
    title: "Emergency Contact Info",
    icon: "🚨",
    description:
      "Rahul Jaiswal (Brother) — +91 98765 43210. Tap to send SOS alert to family & doctor.",
    bg: "bg-pink-100",
  },
];

export default function PatientDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Patient Dashboard | Guardian Suite";
  }, []);

  const handleCardClick = (title) => {
    if (title === "Medical Summary") {
      navigate("/patient/medical-summary");
    } else if (title === "Health Timeline") {
      navigate("/patient/health-timeline");
    } else if (title === "Emergency Contact Info") {
      alert("🚨 SOS alert sent to family & doctor!");
    }
    else if (title === "Chat with Doctor") {
      navigate("/patient/chat-doctor");
    }
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Welcome, Patient 👤</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer transform transition duration-300"
            onClick={() => handleCardClick(section.title)}
          >
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl">
              <div className={`w-12 h-12 flex items-center justify-center text-2xl rounded-full ${section.bg} mb-4`}>
                {section.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
