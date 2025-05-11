"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Star } from "lucide-react"

export default function BookDashboard() {
  const [books, setBooks] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()
  
  // Book categories to randomly assign - kept for backend data processing
  const categories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Sci-Fi",
    "Fantasy",
    "Biography",
    "History",
    "Romance",
    "Thriller",
  ]
  
  // Animation on load
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  useEffect(() => {
    axios.get("http://localhost:8182/admin/getbooks").then((res) => {
      // Add random ratings to each book, but still keeping category for data purposes
      const booksWithRatings = res.data.map((book) => ({
        ...book,
        rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
        category: categories[Math.floor(Math.random() * categories.length)], // Random category (not displayed)
      }))
      setBooks(booksWithRatings)
    })
  }, [])
  
  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = []
    const ratingNum = Number.parseFloat(rating)
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(ratingNum) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />,
      )
    }
    return stars
  }
  
  return (
    <div
      className={`min-h-screen bg-white p-6 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-sky-500 mb-2">📚 Book Dashboard</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our collection of books across various genres</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {books.map((book) => (
          <div
            key={book.bid}
            onClick={() => navigate(`/book/${book.bid}`, { state: { book } })}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
          >
            <div className="bg-gray-100 p-4 flex items-center justify-center">
              <img
                src={`data:image/jpeg;base64,${book.bookImage}`}
                alt={book.bookname}
                className="w-full h-[200px] object-cover rounded-lg"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                {renderStars(book.rating)}
                <span className="ml-2 text-gray-600 text-sm">{book.rating}</span>
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-800">{book.bookname}</h3>
              <p className="text-gray-600 mb-2">Book No: {book.bookno}</p>
              {/* Removed category display line */}
            </div>
          </div>
        ))}
      </div>
      
      {books.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">Loading books...</p>
        </div>
      )}
    </div>
  )
}