// src/pages/SignupPage.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa';

export default function SignupPage() {
  const [form, setForm] = useState({
    role: 'patient',
    name: '',
    email: '',
    password: '',
    age: '',
    gender: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Signup successful! Please login.");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong. Try again.");
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fade-in-up"
      >
        <div className="flex items-center justify-center mb-6">
          <FaUserPlus className="text-blue-600 text-3xl mr-2" />
          <h2 className="text-2xl font-bold text-blue-800">Create Account</h2>
        </div>

        <label className="block mb-1 text-sm font-medium text-gray-700">Select Role</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="patient">Patient</option>
          <option value="family">Family Member</option>
          <option value="doctor">Doctor</option>
        </select>

        <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          placeholder="********"
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* AGE FIELD */}
        <label className="block mb-1 text-sm font-medium text-gray-700">Age</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          required
          placeholder="Enter your age"
          className="mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* GENDER FIELD */}
        <label className="block mb-1 text-sm font-medium text-gray-700">Gender</label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
          className="mb-6 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="" disabled>Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-lg font-semibold transition duration-200"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Log in
          </span>
        </p>
      </form>
    </div>
  );
}
