import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import whatsapp from './Assets/whatsapp.svg'
import logo  from './Assets/Logo.png';
import { RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
          
          <Link to="/" className="flex items-center">
            <img src= {logo} alt="Fiction Master" className="h-7 w-auto sm:w-auto sm:h-7 lg:w-auto lg:h-10"/>
            <h3 className="text-base sm:text-lg lg:text-3xl font-extrabold text-gray-300 pl-4 ">Fiction Master</h3>
          </Link>

            <p className="pt-5 text-md">
              Empowering minds through innovative education and creative learning experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-red-400"><Linkedin size={25} /></a>
              <a href="https://www.instagram.com/fictionmaster.in?igsh=dTA3eHg0aDd1d3R6" className="hover:text-red-400"><Instagram size={25} /></a>
              <a href="#" className="hover:text-red-400"><Youtube size={25} /></a>
              <a href="https://wa.me/917397273994" className="hover:text-red-400">
                <RiWhatsappLine size={25} /> 
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-red-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-400">About Us</Link></li>
              <li><Link to="/services" className="hover:text-red-400">Services</Link></li>
              {/* <li><Link to="/courses" className="hover:text-red-400">Courses</Link></li> */}
              <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin size={20} className="mr-2 text-red-500" />
                 Tiruppur
              </li>
              <li className="flex items-center">
                <img src={whatsapp} className="w-5 h-5 mr-2" alt="WhatsApp" />
                <a href="https://wa.me/917397273994" className="text-gray-300 hover:underline">
                  +91 739 727 3994
                </a>
              </li>
              
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-red-500" />
                <a href="tel:+919790306367" className="text-gray-300 hover:underline">
                +91 979 030 6367
                </a>
              </li>

              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-red-500" />
                <a href="mailto:fictionmaster.in@gmail.com" className="text-gray-300 hover:underline">
                  fictionmaster.in@gmail.com
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>


        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Fiction Master. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;