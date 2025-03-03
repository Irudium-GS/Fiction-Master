import React from 'react';
import { BarChart, PieChart, Users, TrendingUp, Calendar, BookOpen } from 'lucide-react';

const DashboardHome: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: '1,248', icon: <Users size={24} className="text-blue-500" />, change: '+12%' },
    { title: 'Course Enrollments', value: '3,567', icon: <BookOpen size={24} className="text-green-500" />, change: '+7%' },
    { title: 'Revenue', value: '$24,350', icon: <TrendingUp size={24} className="text-red-500" />, change: '+18%' },
    { title: 'Upcoming Events', value: '8', icon: <Calendar size={24} className="text-purple-500" />, change: '+2' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, John!</h1>
        <p className="text-sm text-gray-500">Last login: Today, 10:30 AM</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="p-2 rounded-md bg-gray-100">{stat.icon}</div>
            </div>
            <div className="mt-2">
              <span className="text-xs font-medium text-green-500">{stat.change} from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Course Enrollments</h2>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="flex items-center justify-center h-64 bg-gray-50 rounded-md">
            <BarChart size={48} className="text-gray-300" />
            <p className="ml-2 text-gray-400">Enrollment chart will appear here</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Revenue Breakdown</h2>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="flex items-center justify-center h-64 bg-gray-50 rounded-md">
            <PieChart size={48} className="text-gray-300" />
            <p className="ml-2 text-gray-400">Revenue chart will appear here</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <Users size={18} className="text-red-500" />
              </div>
              <div>
                <p className="text-sm font-medium">New user registered</p>
                <p className="text-xs text-gray-500 mt-1">Jane Smith enrolled in "Digital Marketing Masterclass"</p>
                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 text-sm font-medium text-red-600 hover:text-red-800">
          View all activity
        </button>
      </div>
    </div>
  );
};

export default DashboardHome;