import React, { useState } from "react";

export default function MedicalSummaryPage() {
  const [medicalData, setMedicalData] = useState({
    patientName: "Samarth Jaiswal",
    age: 21,
    bloodGroup: "B+",
    emergencyNote: "Asthmatic. Keep inhaler nearby.",
    vitals: {
      bp: "120/80 mmHg",
      heartRate: "78 bpm",
      sugar: "110 mg/dL",
      oxygen: "98%",
      weight: "68 kg",
      bmi: "22.1",
    },
    reports: [
      {
        name: "🧪 Blood Test",
        date: "15 April 2025",
        doctor: "Dr. Verma",
        file: null,
      },
      {
        name: "📄 X-Ray Chest",
        date: "30 March 2025",
        doctor: "Dr. Nanda",
        file: null,
      },
    ],
    prescriptions: [
      {
        name: "💊 Paracetamol 500mg",
        dosage: "2 times daily",
        date: "14 April 2025",
        doctor: "Dr. Mehta",
      },
    ],
    conditions: [
      "⚠️ Allergic to Penicillin",
      "🩺 Type-2 Diabetes (Diagnosed: 2023)",
    ],
    lastVisit: "15 April 2025",
  });

  const [newReport, setNewReport] = useState({ name: "", date: "", doctor: "", file: null });
  const [newCondition, setNewCondition] = useState("");
  const [newNote, setNewNote] = useState("");
  const [selfVitals, setSelfVitals] = useState({
    bp: "", sugar: "", heartRate: "", oxygen: "", weight: "", bmi: "",
  });

  const addReport = () => {
    if (newReport.name && newReport.date && newReport.doctor) {
      setMedicalData((prev) => ({
        ...prev,
        reports: [...prev.reports, newReport],
      }));
      setNewReport({ name: "", date: "", doctor: "", file: null });
    }
  };

  const addCondition = () => {
    if (newCondition.trim()) {
      setMedicalData((prev) => ({
        ...prev,
        conditions: [...prev.conditions, newCondition],
      }));
      setNewCondition("");
    }
  };

  const updateNote = () => {
    if (newNote.trim()) {
      setMedicalData((prev) => ({
        ...prev,
        emergencyNote: newNote,
      }));
      setNewNote("");
    }
  };

  const submitSelfVitals = () => {
    setMedicalData((prev) => ({
      ...prev,
      vitals: {
        ...selfVitals,
        source: "self",
        date: new Date().toLocaleDateString(),
      },
    }));
    setSelfVitals({ bp: "", sugar: "", heartRate: "", oxygen: "", weight: "", bmi: "" });
  };

  const handleFileChange = (e) => {
    setNewReport({ ...newReport, file: e.target.files[0] });
  };

  const deleteReport = (index) => {
    const updated = [...medicalData.reports];
    updated.splice(index, 1);
    setMedicalData({ ...medicalData, reports: updated });
  };

  const deleteCondition = (index) => {
    const updated = [...medicalData.conditions];
    updated.splice(index, 1);
    setMedicalData({ ...medicalData, conditions: updated });
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-800">🩺 Medical Summary</h1>

      {/* Patient Info */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold text-blue-700">Patient Info</h2>
        <p><strong>Name:</strong> {medicalData.patientName}</p>
        <p><strong>Age:</strong> {medicalData.age}</p>
        <p><strong>Last Visit:</strong> {medicalData.lastVisit}</p>
      </div>

      {/* Add Medical Report */}
      <div className="bg-white shadow rounded-lg p-4 space-y-2">
        <h2 className="text-xl font-semibold text-blue-700">📑 Add Medical Report</h2>
        <input type="text" placeholder="Report Name" value={newReport.name}
          onChange={(e) => setNewReport({ ...newReport, name: e.target.value })}
          className="input" />
        <input type="text" placeholder="Date" value={newReport.date}
          onChange={(e) => setNewReport({ ...newReport, date: e.target.value })}
          className="input" />
        <input type="text" placeholder="Doctor's Name" value={newReport.doctor}
          onChange={(e) => setNewReport({ ...newReport, doctor: e.target.value })}
          className="input" />
        <input type="file" onChange={handleFileChange} className="input" />
        <button onClick={addReport} className="btn">Add Report</button>
      </div>

      {/* Reports */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold text-blue-700">Recent Medical Reports</h2>
        <ul className="list-disc ml-6 space-y-1">
          {medicalData.reports.map((report, i) => (
            <li key={i} className="flex justify-between items-center">
              <span>{report.name} - {report.date} - {report.doctor}</span>
              <div className="flex gap-2 text-sm">
                {report.file && (
                  <a href={URL.createObjectURL(report.file)} target="_blank" rel="noreferrer" className="text-blue-600 underline">View</a>
                )}
                <button onClick={() => deleteReport(i)} className="text-red-500">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Condition */}
      <div className="bg-white shadow rounded-lg p-4 space-y-2">
        <h2 className="text-xl font-semibold text-blue-700">⚠️ Add Condition / Allergy</h2>
        <input type="text" placeholder="e.g. Asthma, Allergy" value={newCondition}
          onChange={(e) => setNewCondition(e.target.value)} className="input" />
        <button onClick={addCondition} className="btn">Add Condition</button>
      </div>

      {/* Conditions */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold text-blue-700">Known Conditions / Allergies</h2>
        <ul className="list-disc ml-6 space-y-1">
          {medicalData.conditions.map((item, i) => (
            <li key={i} className="flex justify-between items-center">
              <span>{item}</span>
              <button onClick={() => deleteCondition(i)} className="text-red-500 text-sm">Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Emergency Note */}
      <div className="bg-white shadow rounded-lg p-4 space-y-2">
        <h2 className="text-xl font-semibold text-blue-700">📝 Emergency Info</h2>
        <input type="text" placeholder="Emergency Note" value={newNote}
          onChange={(e) => setNewNote(e.target.value)} className="input" />
        <button onClick={updateNote} className="btn">Update Note</button>
        <p className="mt-2"><strong>Current Note:</strong> {medicalData.emergencyNote}</p>
        <p><strong>Blood Group:</strong> {medicalData.bloodGroup}</p>
      </div>

      {/* Self Vitals */}
      <div className="bg-white shadow rounded-lg p-4 space-y-2">
        <h2 className="text-xl font-semibold text-blue-700">🧬 Add Basic Vitals (Self)</h2>
        {["bp", "sugar", "heartRate", "oxygen", "weight", "bmi"].map((field) => (
          <input key={field} type="text" placeholder={field.toUpperCase()}
            value={selfVitals[field]} onChange={(e) =>
              setSelfVitals({ ...selfVitals, [field]: e.target.value })} className="input"
          />
        ))}
        <button onClick={submitSelfVitals} className="btn">Submit Vitals</button>
      </div>

      {/* Show Vitals */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold text-blue-700">Basic Vitals</h2>
        <p>BP: {medicalData.vitals.bp} | Sugar: {medicalData.vitals.sugar}</p>
        <p>Heart Rate: {medicalData.vitals.heartRate} | Oxygen: {medicalData.vitals.oxygen}</p>
        <p>Weight: {medicalData.vitals.weight} | BMI: {medicalData.vitals.bmi}</p>
        {medicalData.vitals.source === "self" && (
          <p className="text-sm text-gray-500">* Self Added on {medicalData.vitals.date}</p>
        )}
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            // Future: Replace with API call to save `medicalData` to DB
            console.log("Saving data to database...", medicalData);
            alert("✅ Data will be saved to the database in future implementation.");
          }}
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          💾 Save 
        </button>
      </div>
    </div>
  );
}
