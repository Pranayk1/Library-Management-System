import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddBookad({ onClose, onBookAdded }) {
  const [formData, setFormData] = useState({
    bookname: "",
    author: "",
    bookno: "",
    copies: "",
    bookdesc: "",
    bookImage: null,
  });

  const navigate = useNavigate();

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
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    axios.post("http://localhost:8182/books/add", data)
      .then(() => {
        alert("✅ Book added successfully!");
        onBookAdded(); // refresh book list
        navigate('/bookmanagement'); // redirect after success
      })
      .catch(err => {
        console.error("Add book error:", err);
        // alert("❌ Something went wrong. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[90%] sm:w-[40%] relative">
        <button 
          onClick={() => navigate('/bookmanagement')} 
          className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Add New Book</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="bookname" placeholder="Book Title" value={formData.bookname} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input type="text" name="author" placeholder="Author Name" value={formData.author} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input type="text" name="bookno" placeholder="Book No" value={formData.bookno} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input type="number" name="copies" placeholder="Copies" value={formData.copies} onChange={handleChange} required className="w-full border p-2 rounded" />
          <textarea name="bookdesc" placeholder="Book Description" value={formData.bookdesc} onChange={handleChange} required className="w-full border p-2 rounded" />
          <input type="file" accept="image/*" onChange={handleFileChange} required className="w-full" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
}
