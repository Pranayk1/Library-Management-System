import { useState } from 'react';
import { ChevronLeft, BookOpen, Users, Clock, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
   const navigate = useNavigate(); 
  
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={()=> navigate("/")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flex items-center mb-6 text-gray-700 hover:text-blue-600 transition-colors duration-300 ${isHovered ? 'text-blue-600' : ''}`}
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          <span className="font-medium">Back to Dashboard</span>
        </button>
        
        {/* Main content */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-700 text-white px-6 py-8">
            <h1 className="text-3xl font-bold mb-2">About Us</h1>
            <p className="text-blue-100 text-lg">Library Management System</p>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Our Library Management System is designed to make your library operations simple, efficient, and user-friendly. We believe that knowledge should be accessible to everyone, and our software helps to make this vision a reality.
              </p>
              <p className="text-gray-600">
                This system provides a seamless experience for both library staff and readers, making book management and tracking easier than ever.
              </p>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Book Management</h3>
                    <p className="text-gray-600">Comprehensive system for book inventory, overdue, and acquisitions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Member Management</h3>
                    <p className="text-gray-600">Membership management, renewals, and borrowing history features</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Reporting & Analytics</h3>
                    <p className="text-gray-600">Data-driven decisions with advanced reporting and analytics</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Customizable</h3>
                    <p className="text-gray-600">Adaptable features to suit your library's needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Version and contact info */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-sm font-medium text-gray-500">Version</h3>
                  <p className="text-gray-800">v1.0.0</p>
                </div>
                <div className="mb-4 md:mb-0">
                  <h3 className="text-sm font-medium text-gray-500">Contact</h3>
                  <p className="text-gray-800">support@librarysystem.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Developed By</h3>
                  <p className="text-gray-800">Pranay Kalaskar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}