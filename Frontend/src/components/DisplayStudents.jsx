import { useEffect, useState } from "react";
import axios from "axios";

export default function DisplayStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:8182/books/getall/students");
        setStudents(res.data);
      } catch (error) {
        console.error("Failed to fetch students", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Registered Students</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">First Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Last Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Password</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Field of Study</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-500 uppercase">Address</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{student.firstname}</td>
                <td className="px-6 py-4">{student.lastname}</td>
                <td className="px-6 py-4">{student.email}</td>
                <td className="px-6 py-4">{student.password}</td>
                <td className="px-6 py-4">{student.fieldofStudy}</td>
                <td className="px-6 py-4">{student.address}</td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
