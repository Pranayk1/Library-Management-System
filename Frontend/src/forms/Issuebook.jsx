import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";

export default function Issuebook() {
  const navigate = useNavigate();
  const { id } = useParams(); // This is the bookId which will be passed in the URL.

  const [book, setBook] = useState({
    bookNumber: "",
    bookName: "",
    author:"",
    description: "",
    image: "",
  });

  const [student, setStudent] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const loadBook = async () => {
      try {
        // Fetch book details from backend using the bookId
        const result = await Axios.get(`http://localhost:8182/admin/book/${id}`);
        const data = result.data;

        console.log("Book Response:", data);

        if (data) {
          setBook({
            bookNumber: data.bookNumber || data.bookno || "",
            bookName: data.bookName || data.bookname || "",
            author:data.author || "",
            description: data.description || data.bookdesc || "",
          });
        }
      } catch (error) {
        console.error("Error loading book:", error);
      }
    };

    loadBook();
  }, [id]);

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure that bookId is passed as Integer
      const bookId = parseInt(id);  // Convert String to Integer

      // Send the book issue request to backend
      await Axios.post(`http://localhost:8182/admin/issue-book/${id}`, {
        studentName: student.name,
        studentEmail: student.email,
      });

      navigate("/"); // Redirect after success
    } catch (error) {
      console.error("Error issuing book:", error);
    }
  };

  if (!book.bookName) {
    return (
      <div className="text-center text-lg font-bold mt-10">
        Loading Book Details...
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 p-6 max-w-xl bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Issue Book</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <strong>Book Number:</strong> {book.bookNumber}
        </div>
        <div className="mb-2">
          <strong>Book Name:</strong> {book.bookName}
        </div>

        <div className="mb-2">
  <strong>Author:</strong> {book.author}
</div>


        <div className="mb-2">
          <strong>Description:</strong> {book.description}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Student Name:</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter name"
            value={student.name}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter email"
            value={student.email}
            onChange={onInputChange}
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Issue Book
          </button>
          <button
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
