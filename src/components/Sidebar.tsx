import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Info, 
  BookOpen, 
  Settings, 
  User, 
  LogOut, 
  Menu, 
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isMobile: boolean;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile, isCollapsed, setIsCollapsed }) => {
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, path: '/' },
    { name: 'About', icon: <Info size={20} />, path: '/about' },
    { name: 'Courses', icon: <BookOpen size={20} />, path: '/courses' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
    { name: 'Profile', icon: <User size={20} />, path: '/profile' },
  ];

  return (
    <>
      {isMobile && (
        <button 
          onClick={toggleSidebar} 
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
      
      <div 
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out z-40 ${
          isCollapsed ? 'w-16' : 'w-64'
        } shadow-lg`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and Company Name */}
          <div className={`p-4 border-b border-gray-700 ${isCollapsed ? 'flex justify-center' : ''}`}>
            {isCollapsed ? (
              <div className="flex items-center justify-center">
                <img src="/logo.png" alt="Fiction Master Logo" className="w-8 h-8" />
              </div>
            ) : (
              <>
                <div className="flex items-center space-x-3">
                  <img src="/logo.png" alt="Fiction Master Logo" className="w-10 h-10" />
                  <h1 className="text-xl font-bold text-red-500">Fiction Master</h1>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Crafting compelling digital experiences
                </p>
              </>
            )}
          </div>

          {/* Collapse Toggle Button - Now vertically centered */}
          {!isMobile && (
            <button 
              onClick={toggleCollapse}
              className="absolute top-1/2 -translate-y-1/2 -right-3 bg-red-500 text-white p-1 rounded-full shadow-md z-50"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          )}

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className={`space-y-2 ${isCollapsed ? 'px-0' : 'px-2'}`}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex ${isCollapsed ? 'justify-center' : 'items-center space-x-3'} p-3 rounded-md hover:bg-red-700 transition-colors duration-200`}
                    title={isCollapsed ? item.name : ''}
                  >
                    <span className="text-gray-300">{item.icon}</span>
                    {!isCollapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className={`p-4 border-t border-gray-700 ${isCollapsed ? 'flex justify-center' : ''}`}>
            <button 
              className={`flex ${isCollapsed ? 'justify-center' : 'items-center space-x-3'} p-3 ${isCollapsed ? 'w-auto' : 'w-full'} rounded-md hover:bg-red-700 transition-colors duration-200`}
              onClick={() => console.log('Logout clicked')}
              title={isCollapsed ? 'Logout' : ''}
            >
              <LogOut size={20} className="text-gray-300" />
              {!isCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;