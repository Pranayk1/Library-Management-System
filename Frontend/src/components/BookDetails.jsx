import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function BookDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); // Book ID from URL
  const [book, setBook] = useState(location.state?.book || null);

  useEffect(() => {
    // If book is not in state (like after refresh), fetch from backend
    if (!book) {
      axios.get(`http://localhost:8182/admin/book/${id}`)
        .then((res) => setBook(res.data))
        .catch((err) => {
          console.error("Failed to fetch book", err);
          navigate("/books"); // fallback if error
        });
    }
  }, [book, id, navigate]);

  if (!book) {
    return <div className="text-center mt-10">📖 Loading book details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <img
        src={`data:image/jpeg;base64,${book.bookImage}`}
        alt={book.bookname}
        className="w-[75%] max-w-[300px] h-auto object-cover rounded-xl shadow-lg mb-8"
      />

      <div className="max-w-3xl text-left w-full px-4">
        <p className="text-gray-600 text-lg mb-2">
          <span className="font-semibold text-gray-800">Book Number:</span> {book.bookno}
        </p>
        <p className="text-gray-600 text-lg mb-2">
          <span className="font-semibold text-gray-800">Book Name:</span> {book.bookname}
        </p>
        <p className="text-gray-600 text-lg mb-2">
          <span className="font-semibold text-gray-800">Author:</span> {book.author}
        </p>
        <p className="text-gray-600 text-lg mb-6">
          <span className="font-semibold text-gray-800">Description:</span> {book.bookdesc}
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate(`/issuebook/${book.bookno}`)}
            className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
          >
            Issue Book
          </button>
          <button
            onClick={() => navigate("/books")}
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
