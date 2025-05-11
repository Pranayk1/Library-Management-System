import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    password: "",
    fieldofStudy: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8182/admin/register", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Registration failed. " + error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <label className="block mb-2">First Name</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="Enter your first name"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <label className="block mb-2">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Enter your last name"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <label className="block mb-2">Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <label className="block mb-2">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter Student ID"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter a secure password"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <label className="block mb-2">Field of Study</label>
        <input
          type="text"
          name="fieldofStudy"
          value={formData.fieldofStudy}
          onChange={handleChange}
          placeholder="Enter your field"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account? <a href="/login" className="text-blue-500">Login here</a>
        </p>
      </form>
    </div>
  );
}
