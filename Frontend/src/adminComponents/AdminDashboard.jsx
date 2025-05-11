 import React from 'react'
 import Sidebar from './Sidebar'
import Dashboard from '../components/Dashboard'
 import DashboardContent from './DashboardContent'
 import BookManagement from './BookManagement';
 import { Outlet } from 'react-router-dom'
import DisplayIssued from '../components/DisplayIssued';


export default function AdminDashboard() {
  return (
 <>
<div className="flex h-screen">
      <Sidebar />
      <Routes>
        <Route path="/content" element={<DashboardContent />} />
        <Route path="/bookmanagement" element={<BookManagement />} />
         <Route path="/admin/transactions" element={<DisplayIssued />} />
                     <Route path="/admin/members" element={<DisplayStudents />} />

      </Routes>
    </div>
 </> 

 );
}
