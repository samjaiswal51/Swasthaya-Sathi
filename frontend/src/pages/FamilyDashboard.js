// src/pages/FamilyDashboard.js
export default function FamilyDashboard() {
    return (
      <div className="min-h-screen bg-green-50 p-6">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Welcome, Family Member 👨‍👩‍👧</h1>
  
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">📡 Real-Time Patient Updates</h2>
            <p className="text-gray-700">See what’s happening with your loved one live – vitals, treatment, doctor visits.</p>
          </div>
  
          <div className="p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">📅 Health Timeline</h2>
            <p className="text-gray-700">View every test, surgery, and medicine administered so far.</p>
          </div>
  
          <div className="p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">🚨 Chaos Mode Alerts</h2>
            <p className="text-gray-700">Get notified instantly in case of emergencies or sudden critical changes.</p>
          </div>
  
          <div className="p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">📞 Contact Hospital</h2>
            <p className="text-gray-700">Quick call/chat access to doctors or hospital admin.</p>
          </div>
        </div>
      </div>
    );
  }
  