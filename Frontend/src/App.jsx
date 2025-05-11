import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import './App.css'
import Dashboard from './components/Dashboard'
import AddBookad from './forms/AddBookad'
import BookDashboard from './components/BookDashboard'
import BookDetails from "./components/BookDetails";
import Issuebook from './forms/Issuebook';
import BookCard from './components/BookCard';
import DisplayIssued from './components/DisplayIssued';
import Navbar from './components/Navbar';
import BookManagement from './adminComponents/BookManagement';
import UpdateBook from './forms/UpdateBook';
import Register from './forms/Register';
import AdminLogin from './forms/AdminLogin';
import DisplayStudents from './components/DisplayStudents';
import Login from './forms/Login';
import DashboardContent from './adminComponents/DashboardContent'
import Sidebar from './adminComponents/Sidebar';
import AdminDashboard from './adminComponents/AdminDashboard';
import About from './components/About';


function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [viewMode, setViewMode] = useState('user'); // 'admin' or 'user'
  const navigate = useNavigate();
  const location = useLocation(); // Use location to determine current path
  
  // Check if current path is login or register to hide navbar
  const hideNavbar = ['/login', '/register'].includes(location.pathname);

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setViewMode('user');
    navigate('/');
  };

  const handleBackToLMS = () => {
    setViewMode('user');
    navigate('/');
  };

  const handleBackToAdmin = () => {
    setViewMode('admin');
    navigate('/content');
  };

  return (
    <>
      {isAdminLoggedIn && viewMode === 'admin' ? (
        // Admin view with sidebar
        <div className="flex h-screen">
          <Sidebar onLogout={handleLogout} onBackToLMS={handleBackToLMS} />
          <div className="flex-1 ml-64">
            <Routes>
              <Route path="/content" element={<DashboardContent />} />
              <Route path="/bookmanagement" element={<BookManagement />} />
              <Route path="/add" element={<AddBookad />} />
              <Route path="/update" element={<UpdateBook />} />
              <Route path="/admin/transactions" element={<DisplayIssued />} />
              <Route path="/admin/members" element={<DisplayStudents />} />
            </Routes>
          </div>
        </div>
      ) : (
        // Regular user view with navbar and content
        <>
          {/* Only show Navbar if not on login or register pages */}
          {!hideNavbar && (
            <Navbar 
              isAdmin={isAdminLoggedIn} 
              onBackToAdmin={isAdminLoggedIn ? handleBackToAdmin : null} 
            />
          )}
          <div className={hideNavbar ? "" : "pt-4"}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/books" element={<BookDashboard />} />
              <Route path="/viewallbooks" element={<BookDashboard />} />


              <Route path="/about" element={<About/>} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/issuebook/:id" element={<Issuebook />} />
              <Route path="/admin" element={<AdminLogin onLoginSuccess={() => {
                setIsAdminLoggedIn(true);
                setViewMode('admin');
                navigate('/content');
              }} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}
export default App