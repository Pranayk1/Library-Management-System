import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = ({ onLoginSuccess }) => {
  const [adminusername, setAdminusername] = useState('');
  const [adminpassword, setAdminpassword] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.get(`http://localhost:8182/books/getbyadmin/${adminpassword}`);
      
      // Check both username and password (manually in frontend)
      if (res.data && res.data.adminpassword === adminpassword && res.data.adminusername === adminusername) {
        // Update the login state in parent component
        onLoginSuccess();
        
        // Navigate to content page
        navigate("/content");
        
        alert("Login successful");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Admin Username</label>
            <input
              type="text"
              placeholder="Enter admin username"
              value={adminusername}
              onChange={(e) => setAdminusername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={adminpassword}
              onChange={(e) => setAdminpassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;