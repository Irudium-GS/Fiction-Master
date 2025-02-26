import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Star, Pen, Target, BookCheck, Brain, Coffee, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImg from '../components/Assets/AboutUs.jpg'
import AI from '../components/Assets/AI.jpg';
import Cyber from '../components/Assets/Cyber.jpg';
import Linux from '../components/Assets/Linux.jpg';

const Home = () => {
  return (
    <div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-gray-900 to-black overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Welcome to Fiction Master
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            Unlock Your Creative Potential with Our Expert-Led Courses
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/courses" className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors inline-block">
              Explore Courses
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, label: 'Courses', value: '5+' },
              { icon: Users, label: 'Students', value: '10+' },
              { icon: Award, label: 'Awards', value: '3+' },
              { icon: Star, label: 'Rating', value: '4.9/5' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-red-600" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Empowering Learners to Achieve Their Goals</h2>
              <p className="text-lg text-gray-600">
              At Fiction Master, we are committed to providing top-quality education that equips learners with practical skills for the real world. Our mission is to empower students through expert-led courses, hands-on projects, and a supportive learning environment that fosters growth and innovation.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Target, text: 'Personalized learning paths tailored to your career goals' },
                  { icon: Brain, text: 'Expert instructors with real-world industry experience' },
                  { icon: Coffee, text: 'A collaborative and engaging community to support your journey' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="w-6 h-6 text-red-600" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-block mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={aboutImg}
                  alt="Writing Workshop"
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            we provide industry-focused courses designed to help you master in-demand skills. 
            our hands-on training and expert guidance will set you on the path to success. 
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Pen,
                title: 'Full Stack Development',
                description: 'Master the art of web development with our comprehensive Full Stack Development course. Learn HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL. Build real-world projects and become a job-ready full-stack developer.',
              },
              {
                icon: BookCheck,
                title: 'UI/UX Designs',
                description: 'Gain expertise in User Interface (UI) and User Experience (UX) Design with practical, industry-standard tools like Figma, Adobe XD, and Sketch. Learn how to design engaging, accessible, and visually appealing web and mobile applications.',
              },
              {
                icon: Users,
                title: 'Digital Marketing',
                description: 'Master the art of SEO, social media marketing, Google Ads, and content marketing to grow businesses online. Get hands-on training in analytics, strategy building, and campaign management.',
              },
              {
                icon: BookOpen,
                title: 'E-Commerce Solutions',
                description: 'Start your own E-commerce business with our step-by-step course. Learn how to create, optimize, and manage online stores using Shopify, WooCommerce, and custom-built solutions.',
              },
              {
                icon: Star,
                title: 'Drop Shipping',
                description: 'Learn how to set up and run a profitable drop shipping business with minimal investment. Understand supplier selection, automation tools, and customer engagement techniques to succeed in the e-commerce industry.',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-block mt-4 text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Artificial Intelligent & ML',
                image: AI,
                price: '$99',
              },
              {
                title: 'Linux Administrator',
                image: Linux,
                price: '$149',
              },
              {
                title: 'Cyber Security',
                image: Cyber,
                price: '$79',
              },
            ].map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">
                    Learn from industry experts and master your craft
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">{course.price}</span>
                    <Link
                      to="/courses"
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;