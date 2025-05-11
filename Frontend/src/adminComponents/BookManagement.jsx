import { useEffect, useState } from "react";
import axios from "axios";
import { Edit, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BookManagement() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios.get("http://localhost:8182/books/getallbooks")
      .then(res => {
        const booksWithImageUrls = res.data.map(book => ({
          ...book,
          imageUrl: `data:image/jpeg;base64,${book.bookImage}`
        }));
        setBooks(booksWithImageUrls);
      })
      .catch(err => {
        console.error("Error fetching books:", err);
      });
  };

  const deleteBook = (bookno) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    axios.delete(`http://localhost:8182/admin/delete/${bookno}`)
      .then(() => {
        setBooks(prevBooks => prevBooks.filter(book => book.bookno !== bookno));
        alert("Book deleted successfully.");
      })
      .catch(err => {
        console.error("Error deleting book:", err);
        alert("Failed to delete the book.");
      });
  };

  const openPopup = (book) => {
    setSelectedBook(book);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const goToAddBook = () => {
    navigate("/add");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-6 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Book Management</h1>

        {/* Search Box */}
        <div className="w-full sm:w-[50%] flex justify-center">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center"
          />
        </div>

        {/* Add Book Button */}
        <button
          onClick={goToAddBook}
          className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition-all duration-200"
        >
          Add Book
        </button>
      </div>

      {/* Book Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Book Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Copies</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {books.map((book, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={book.imageUrl}
                    alt={book.bookname}
                    className="w-16 h-20 object-cover rounded cursor-pointer"
                    onClick={() => openPopup(book)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{book.bookname}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.bookno}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.copies}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => navigate("/update", { state: { book } })}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => deleteBook(book.bookno)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Book Details Popup */}
      {isPopupOpen && selectedBook && (
        <div className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[90%] sm:w-[30%] max-w-sm relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
            <div className="text-center">
              <img
                src={selectedBook.imageUrl}
                alt={selectedBook.bookname}
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">{selectedBook.bookname}</h2>
              <p className="text-sm text-gray-600 mt-2">{selectedBook.bookdesc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
