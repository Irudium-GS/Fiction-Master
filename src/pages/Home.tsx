import React from 'react';
import { 
  Users, 
  Trophy, 
  SmilePlus, 
  Calendar, 
  Laptop, 
  BookOpen, 
  MessageSquare,
  GraduationCap,
  ShoppingCart,
  Code,
  Palette,
  Globe,
  Layout,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoScroll from '../components/LogoScroll';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-red-600 to-black">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Digital Presence with Fiction Master
            </h1>
            <p className="text-xl mb-8">
              Your one-stop solution for IT consultancy, digital marketing, and professional education.
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCard icon={<Users />} number="20+" text="Happy Clients" />
            <StatsCard icon={<Trophy />} number="20+" text="Projects Completed" />
            <StatsCard icon={<SmilePlus />} number="100%" text="Client Satisfaction" />
            <StatsCard icon={<Calendar />} number="Since 2024" text="Years of Excellence" />
          </div>
        </div>
      </section>



      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team collaboration" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-800 mb-6">
                Fiction Master is a leading provider of IT solutions, digital marketing services, and professional education. 
                We help businesses and individuals transform their digital presence and achieve their goals through 
                innovative solutions and expert guidance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/services">
                  <ServiceHighlight icon={<Laptop />} text="IT Solutions" />
                </Link>
                <Link to="/digitalMarketing">
                  <ServiceHighlight icon={<MessageSquare />} text="Digital Marketing" />
                </Link>
                <Link to="/WorkUnderConstruction">
                  <ServiceHighlight icon={<GraduationCap />} text="Education" />
                </Link>
                <Link to="/WorkUnderConstruction">
                  <ServiceHighlight icon={<ShoppingCart />} text="Products" /> 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your business needs and drive growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* IT Solutions */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">IT Solutions</h3>
                <p className="text-gray-600 mb-6">Expert IT consulting and development services to power your digital transformation</p>
                <Link to="/services" className="inline-flex items-center text-red-600 font-semibold hover:text-red-700">
                  Learn More
                  <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
                <p className="text-gray-600 mb-6">Strategic marketing solutions to boost your online presence and reach</p>
                <Link to="/digitalMarketing" className="inline-flex items-center text-red-600 font-semibold hover:text-red-700">
                  Learn More
                  <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Education */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <p className="text-gray-600 mb-6">Professional courses and training programs to advance your career</p>
                <Link to="/WorkUnderConstruction" className="inline-flex items-center text-red-600 font-semibold hover:text-red-700">
                  Learn More
                  <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Products */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layout className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Products</h3>
                <p className="text-gray-600 mb-6">Premium templates and design resources for your projects</p>
                <Link to="/WorkUnderConstruction" className="inline-flex items-center text-red-600 font-semibold hover:text-red-700">
                  Learn More
                  <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Trusted By Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Trusted By</h2>
          <LogoScroll />
        </div>
      </section>
    </div>
  );
}

// Helper Components
function StatsCard({ icon, number, text }) {
  return (
    <div className="text-center transform hover:scale-105 transition-all duration-300">
      <div className="inline-block p-4 bg-red-600 text-white rounded-full mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold text-black mb-2">{number}</div>
      <div className="text-gray-700">{text}</div>
    </div>
  );
}

function ServiceHighlight({ icon, text }) {
  return (
    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg transform hover:scale-105 transition-all duration-300">
      <div className="text-red-600">{icon}</div>
      <span className="font-medium text-gray-800">{text}</span>
    </div>
  );
}

export default Home;

