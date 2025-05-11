import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (

<div className="bg-blue-500 text-white px-8 py-4 flex justify-between items-center">
      <div className="text-3xl font-bold">Library Management System</div>
      <div className="space-x-8 text-xl font-medium">
        <Link to="/admin" className="hover:underline">Admin Panel</Link>
        <Link to="/books" className="hover:underline">Books</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </div>
    </div>



  )
}
