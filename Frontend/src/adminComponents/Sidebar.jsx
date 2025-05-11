import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, Users, FileText, LogOut,ArrowLeft } from "lucide-react";

export default function Sidebar({ onLogout, onBackToLMS }) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed">
      {/* Library Admin Header */}
      <div className="h-16 bg-blue-500 flex items-center px-6">
        <h1 className="text-white text-xl font-bold">Library Admin</h1>
      </div>
      
      {/* Sidebar Menu */}
      <div className="p-4">
        <NavLink
          to="/content"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-50 text-blue-600 p-3 rounded-md flex items-center space-x-3 mb-2"
              : "text-gray-600 p-3 rounded-md flex items-center space-x-3 mb-2 hover:bg-gray-100"
          }
        >
          <LayoutDashboard size={20} />
          <div className="font-medium">Dashboard</div>
        </NavLink>
        
        <NavLink
          to="/bookmanagement"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-50 text-blue-600 p-3 rounded-md flex items-center space-x-3 mb-2"
              : "text-gray-600 p-3 rounded-md flex items-center space-x-3 mb-2 hover:bg-gray-100"
          }
        >
          <BookOpen size={20} />
          <span className="font-medium">Books</span>
        </NavLink>
        
        <NavLink
          to="/admin/members"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-50 text-blue-600 p-3 rounded-md flex items-center space-x-3 mb-2"
              : "text-gray-600 p-3 rounded-md flex items-center space-x-3 mb-2 hover:bg-gray-100"
          }
        >
          <Users size={20} />
          <span className="font-medium">Members</span>
        </NavLink>
        
        <NavLink
          to="/admin/transactions"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-50 text-blue-600 p-3 rounded-md flex items-center space-x-3 mb-2"
              : "text-gray-600 p-3 rounded-md flex items-center space-x-3 mb-2 hover:bg-gray-100"
          }
        >
          <FileText size={20} />
          <span className="font-medium">Transactions</span>
        </NavLink>
        
        {/* Back to LMS Button */}
        <div
          onClick={onBackToLMS}
          className="text-gray-600 p-3 rounded-md flex items-center space-x-3 mt-8 hover:bg-gray-100 cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to LMS</span>
        </div>
        
        {/* Logout button */}
        <div
          onClick={onLogout}
          className="text-gray-600 p-3 rounded-md flex items-center space-x-3 mt-2 hover:bg-gray-100 cursor-pointer"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </div>
      </div>
    </div>
  );
}