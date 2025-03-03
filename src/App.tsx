import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import AnimatedBackground from './components/AnimatedBackground';
import Dashboard from './components/Dashboard';
import DashboardHome from './pages/DashboardHome';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          
        <Route path="/" element={
          <Dashboard>
            <DashboardHome />
          </Dashboard>
        } />
        <Route path="/about" element={
          <Dashboard>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">About Page</h1>
              <p className="text-gray-600">This is the about page content.</p>
            </div>
          </Dashboard>
        } />
        <Route path="/courses" element={
          <Dashboard>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Courses Page</h1>
              <p className="text-gray-600">This is the courses page content.</p>
            </div>
          </Dashboard>
        } />
        <Route path="/settings" element={
          <Dashboard>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Settings Page</h1>
              <p className="text-gray-600">This is the settings page content.</p>
            </div>
          </Dashboard>
        } />
        <Route path="/profile" element={
          <Dashboard>
            <ProfilePage />
          </Dashboard>
        } />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold text-red-600 mb-4">Page Not Found</h1>
              <p className="text-gray-600 mb-4">The page you are looking for doesn't exist or has been moved.</p>
              <a href="/" className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                Go Home
              </a>
            </div>
          </div>
        } />
      
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;