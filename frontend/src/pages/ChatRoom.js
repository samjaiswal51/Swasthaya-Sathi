// src/pages/ChatRoom.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Backend URL

export default function ChatRoom() {
  const { doctorId } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const patientId = "patient123"; // TODO: Replace with actual logged-in patient ID
  const roomId = `${patientId}_${doctorId}`;

  useEffect(() => {
    const handleReceiveMessage = ({ message }) => {
      setMessages((prev) => [...prev, { text: message, sender: "doctor" }]);
    };

    socket.emit("joinRoom", { roomId });
    socket.on("receiveMessage", handleReceiveMessage);

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [roomId]);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("sendMessage", { roomId, message });
      setMessages((prev) => [...prev, { text: message, sender: "me" }]);
      setMessage("");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Chat with Doctor</h2>
      <div className="bg-gray-100 h-64 rounded-xl p-4 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.sender === "me"
                ? "text-right text-blue-600"
                : "text-left text-green-700"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border p-2 rounded-l-lg"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
