import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function UpdateBook({ bookno, onClose, onBookUpdated }) {
  const [formData, setFormData] = useState({
    bookname: "",
    author: "",
    bookno: "",
    copies: "",
    bookdesc: "",
    bookImage: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!bookno) return;

    axios.get(`http://localhost:8182/books/getby/${bookno}`)
      .then(response => {
        const data = response.data;
        setFormData(prev => ({
          ...prev,
          bookname: data.bookname || "",
          author: data.author || data.Author || "",
          bookno: data.bookno || "",
          copies: data.copies?.toString() || "",
          bookdesc: data.bookdesc || "",
          bookImage: null,
        }));
      })
      .catch(err => console.error("Error loading book:", err));
  }, [bookno]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, bookImage: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    const copiesInt = parseInt(formData.copies);

    Object.entries({
      ...formData,
      copies: isNaN(copiesInt) ? 0 : copiesInt
    }).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        data.append(key, value);
      }
    });

    axios.put(`http://localhost:8182/books/update/${formData.bookno}`, data)
      .then(() => {
        alert("✅ Book updated successfully!");
        if (onBookUpdated) onBookUpdated();
        if (onClose) onClose();
        navigate("/bookmanagement");
      })
      .catch(err => {
        console.error("Update book error:", err);
        alert("❌ Failed to update book.");
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[40%] relative">
        <button
          onClick={() => navigate("/bookmanagement")}
          className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Update Book</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="bookname"
            placeholder="Book Title"
            value={formData.bookname}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="author"
            placeholder="Author Name"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="bookno"
            placeholder="Book No"
            value={formData.bookno}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            name="copies"
            placeholder="Copies"
            value={formData.copies}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            name="bookdesc"
            placeholder="Book Description"
            value={formData.bookdesc}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
}
