import React from 'react'

export default function BookCard({ title, author }) {
  return (

    <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="w-36 h-36 bg-gray-300 flex items-center justify-center mx-auto rounded-lg mb-4">
      <span className="text-gray-500">150 x 150</span>
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-700">Author: {author}</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">View Details</button>
  </div>
  )
}
