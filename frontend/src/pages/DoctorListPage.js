// src/pages/DoctorListPage.js

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DoctorListPage() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/doctors")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChat = (doctorId) => {
    navigate(`/chatroom/${doctorId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Available Doctors</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doc) => (
          <div key={doc._id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                👨‍⚕️
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-semibold">{doc.name}</h2>
                <p className="text-gray-600">{doc.specialization}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-1"><strong>Experience:</strong> {doc.experience}</p>
            <p className="text-sm text-gray-700 mb-3"><strong>Hospital:</strong> {doc.hospital}</p>
            <button
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => handleChat(doc._id)}
            >
              Chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
