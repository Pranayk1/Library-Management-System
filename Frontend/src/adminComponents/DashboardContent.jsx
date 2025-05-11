 import { LayoutDashboard, BookOpen, Users, FileText } from "lucide-react";

 export default function DashboardContent() {
    return (
      <div className="flex-1 overflow-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Total Books */}
          <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium text-gray-800">Total Books</h2>
              <p className="text-4xl font-bold text-blue-600 mt-2">2,543</p>
              <p className="text-sm text-gray-500 mt-1">+12 added this week</p>
            </div>
            <div className="text-blue-500">
              <BookOpen size={32} />
            </div>
          </div>
          
          {/* Total Members */}
          <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium text-gray-800">Total Members</h2>
              <p className="text-4xl font-bold text-blue-600 mt-2">1,234</p>
              <p className="text-sm text-gray-500 mt-1">+8 new members this week</p>
            </div>
            <div className="text-blue-500">
              <Users size={32} />
            </div>
          </div>
          
          {/* Books Borrowed */}
          <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium text-gray-800">Books Borrowed</h2>
              <p className="text-4xl font-bold text-blue-600 mt-2">342</p>
              <p className="text-sm text-gray-500 mt-1">+24 this week</p>
            </div>
            <div className="text-blue-500">
              <FileText size={32} />
            </div>
          </div>
        </div>
        
        {/* Recent Transactions and Popular Books */}
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Recent Transactions</h2>
            <p className="text-gray-500 text-sm mb-6">Latest book borrowings and returns</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <div>
                  <p className="font-medium">The Great Gatsby</p>
                  <p className="text-gray-500 text-sm">John Doe</p>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-3">Borrowed</span>
                  <span className="text-gray-500 text-sm">Today, 10:30 AM</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <div>
                  <p className="font-medium">To Kill a Mockingbird</p>
                  <p className="text-gray-500 text-sm">Jane Smith</p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">Returned</span>
                  <span className="text-gray-500 text-sm">Today, 9:15 AM</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <div>
                  <p className="font-medium">1984</p>
                  <p className="text-gray-500 text-sm">Robert Johnson</p>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-3">Borrowed</span>
                  <span className="text-gray-500 text-sm">Yesterday, 3:45 PM</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <div>
                  <p className="font-medium">Pride and Prejudice</p>
                  <p className="text-gray-500 text-sm">Emily Davis</p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">Returned</span>
                  <span className="text-gray-500 text-sm">Yesterday, 1:20 PM</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Popular Books */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Popular Books</h2>
            <p className="text-gray-500 text-sm mb-6">Most borrowed books this month</p>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <p>
                    <span className="font-medium">To Kill a Mockingbird</span>
                    <span className="block text-gray-500 text-sm">Harper Lee</span>
                  </p>
                  <span className="font-bold">85</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <p>
                    <span className="font-medium">1984</span>
                    <span className="block text-gray-500 text-sm">George Orwell</span>
                  </p>
                  <span className="font-bold">72</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <p>
                    <span className="font-medium">The Great Gatsby</span>
                    <span className="block text-gray-500 text-sm">F. Scott Fitzgerald</span>
                  </p>
                  <span className="font-bold">65</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    

  }