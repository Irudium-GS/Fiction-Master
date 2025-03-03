import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Bell, Search, User } from 'lucide-react';

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        isMobile={isMobile} 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed} 
      />
      
      <div 
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isMobile ? 'ml-0' : (isCollapsed ? 'ml-16' : 'ml-64')
        }`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              {isMobile && <div className="w-8"></div>} {/* Spacer for mobile menu icon */}
              <h2 className="text-xl font-semibold text-gray-800 ml-8 md:ml-0">Dashboard</h2>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
              
              {/* Notifications */}
              <button className="p-2 rounded-full hover:bg-gray-200 relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* User Profile */}
              <button className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
                  <User size={18} />
                </div>
                <span className="hidden md:inline text-sm font-medium">John Doe</span>
              </button>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;