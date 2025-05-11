"use client"

import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { BookOpen, Search, ChevronRight, Star, ArrowRight, Facebook, Twitter, Instagram, Github } from "lucide-react"
import Navbar from "./Navbar" // Import your Navbar component
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isVisible, setIsVisible] = useState(false)
   const navigate = useNavigate(); 

  // Animation on load
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const books = [
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/81W6BFaJJWL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Harry Potter Series",
      author: "JK Rowling",
      rating: 4.2,
      image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-b57dac15--Books8.jpg?v=1620061403",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      rating: 4.7,
      image: "https://cdn.shopify.com/s/files/1/0070/1884/0133/t/8/assets/pf-24db0028--Books13.jpg?v=1620061439",
    },
    
  ]

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Book Enthusiast",
      content:
        "This library has transformed my reading experience. The collection is vast and the service is exceptional!",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "Literature Professor",
      content:
        "As an educator, I find this library's resources invaluable for both my research and teaching materials.",
      rating: 4,
    },
    {
      name: "David Chen",
      role: "Student",
      content: "The online dashboard makes it so easy to find and reserve books. Definitely recommend to all students!",
      rating: 5,
    },
  ]

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />,
      )
    }
    return stars
  }

  return (
    <div className="min-h-screen bg-white mt-[-15.3px]">
      {/* Use the imported Navbar component */}
      

      {/* Hero Section */}
      <div
        className={`bg-gradient-to-r from-sky-500 to-sky-600 text-white py-16 md:py-24 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Your Next Favorite Book</h1>
            <p className="text-xl mb-8">Access thousands of books from our extensive collection</p>
            <div className="relative max-w-xl mx-auto">
              
              
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Featured Books Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-sky-500 mb-2">Featured Books</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of must-read books across various genres
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {filteredBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-gray-100 p-4 flex items-center justify-center">
                  <img
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    className="w-[150px] h-[200px] object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {renderStars(book.rating)}
                    <span className="ml-2 text-gray-600 text-sm">{book.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-gray-800">{book.title}</h3>
                  <p className="text-gray-600 mb-2">By {book.author}</p>
                  <p className="text-sky-500 text-sm mb-4">{book.category}</p>
                  <div className="flex justify-between items-center">
                    <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-all duration-300 flex items-center">
                      View Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                    <button className="text-sky-500 hover:text-sky-700 transition-all duration-300">
                      + Add to List
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">No books found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("")
                }}
                className="mt-4 text-sky-500 hover:text-sky-700 transition-all duration-300"
              >
                Clear search
              </button>
            </div>
          )}

          <div className="text-center mt-10">
            <button className="bg-white text-sky-500 border border-sky-500 px-6 py-3 rounded-lg hover:bg-sky-50 transition-all duration-300 flex items-center mx-auto"
                      onClick={()=> navigate("/viewallbooks")}

            >
              View All Books
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50 py-16 px-4 rounded-2xl mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-500 mb-2">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear from our community of readers and book enthusiasts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="bg-sky-100 text-sky-500 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-sky-500 text-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8 text-sky-100">
              Subscribe to our newsletter to receive updates on new arrivals, events, and reading recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <button className="bg-white text-sky-500 px-6 py-3 rounded-lg font-medium hover:bg-sky-100 transition-all duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-6 w-6" />
                <span className="text-xl font-bold">Library Admin</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your gateway to knowledge and imagination. Explore our vast collection of books and resources.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Books
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Reading Lists
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Book Clubs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Author Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="text-gray-400 not-italic">
                <p>123 Library Street</p>
                <p>Bookville, BK 12345</p>
                <p className="mt-2">Email: info@libraryadmin.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Library Admin. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<div></div>} />
      </Routes>
    </div>
  )
}

export default Dashboard
