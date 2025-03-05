import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Download from './pages/Download';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext';

import Dashboard from './components/Dashboard';
import DashboardHome from './pages/DashboardHome';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <CartProvider>
      <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />

          {/* Dashboard Routes (Nested) */}
          {/* <Route path="/dashboard" element={<Dashboard/>}>
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="Download" element={
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Download Page</h1>
                <p className="text-gray-600">This is the Download page content.</p>
              </div>
            } />
            <Route path="settings" element={
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Settings Page</h1>
                <p className="text-gray-600">This is the settings page content.</p>
              </div>
            } />
          </Route> */}

          {/* 404 Page */}
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
    </CartProvider>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Download from './pages/Download';
// import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './components/Dashboard';
// import DashboardHome from './pages/DashboardHome';
// import ProfilePage from './pages/ProfilePage';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/download" element={<Download />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Dashboard Routes */}
//           <Route path="/dashboard" element={<Dashboard />}>
//             <Route index element={<DashboardHome />} />
//             <Route path="profile" element={<ProfilePage />} />
//           </Route>

//           {/* 404 Page */}
//           <Route path="*" element={
//             <div className="min-h-screen flex items-center justify-center bg-gray-100">
//               <div className="bg-white p-8 rounded-lg shadow-md">
//                 <h1 className="text-2xl font-bold text-red-600 mb-4">Page Not Found</h1>
//                 <p className="text-gray-600 mb-4">The page you are looking for doesn't exist or has been moved.</p>
//                 <a href="/" className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
//                   Go Home
//                 </a>
//               </div>
//             </div>
//           } />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
