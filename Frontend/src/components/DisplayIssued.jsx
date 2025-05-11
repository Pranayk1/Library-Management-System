import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayIssued = () => {
  const [issuedBooks, setIssuedBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8182/books/display-issued")
      .then((response) => {
        setIssuedBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching issued books:", error);
      });
  }, []);

  return (
    <div className="p-6">
      {/* <div className="bg-white p-6 rounded-xl shadow-md"> */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Issued Books</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">#</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Image</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Book No</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Author</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Student Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Student Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Issue Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Issue Time</th>
              </tr>
            </thead>
            <tbody>
              {issuedBooks.map((book, index) => {
                const issueDate = new Date(book.issueDateTime);
                return (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">
                      {book.bookImage ? (
                        <img
                          src={`data:image/jpeg;base64,${book.bookImage}`}
                          alt={book.bookname}
                          className="h-16 w-12 object-cover rounded"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td className="px-6 py-4">{book.bookno}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{book.bookname}</td>
                    <td className="px-6 py-4">{book.author}</td>
                    <td className="px-6 py-4">{book.studentname}</td>
                    <td className="px-6 py-4">{book.studentemail}</td>
                    <td className="px-6 py-4">{issueDate.toLocaleDateString()}</td>
                    <td className="px-6 py-4">{issueDate.toLocaleTimeString()}</td>
                  </tr>
                );
              })}
              {issuedBooks.length === 0 && (
                <tr>
                  <td colSpan="9" className="px-6 py-4 text-center text-gray-500">
                    No books issued.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        {/* </div> */}
      </div>
    </div>
  );
};

export default DisplayIssued;
