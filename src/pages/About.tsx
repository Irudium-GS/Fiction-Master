import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Users, Award } from 'lucide-react';
import profile from '../components/Assets/Profile.jpg';
// import md from '../components/Assets/MD.jpg';
// import FullStackDev from '../components/Assets/FullStackDev.jpg'

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Fiction Master</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering aspiring writers to master their craft and bring their stories to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Target className="w-12 h-12 text-red-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
              At Fiction Master, we believe that every story holds the power to inspire, transform, and connect people across the world. 
              Our mission is to cultivate a new generation of storytellers by providing world class education, personalized mentorship, and cutting-edge resources. 
              We strive to create a nurturing space where creativity flourishes, words come to life, and aspiring writers turn their passion into literary masterpieces.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <BookOpen className="w-12 h-12 text-red-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
              We envision a world where stories transcend boundaries, voices are empowered, and imagination knows no limits. 
              Fiction Master aims to be the leading platform for creative writing, fostering a global community of writers who push the limits of storytelling. 
              Through innovation, collaboration, and dedication to the craft, we aspire to shape the future of literature one compelling story at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Mr. Shyed Azarudeen',
                role: 'Founder',
                image: profile,
              },
              {
                name: 'Mr. Mohammed Safiullah',
                role: 'Managing Director',
                image: profile,
              },
              {
                name: 'Mrs. Sandhya',
                role: 'Software Developer',
                image: profile,
              },
              {
                name: 'Gopi Shankar V',
                role: 'Full Stack Developer',
                image: profile,
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-red-600 mb-3">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Community',
                description: 'Foster a supportive environment where writers can grow together',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Maintain the highest standards in education and mentorship',
              },
              {
                icon: BookOpen,
                title: 'Innovation',
                description: 'Embrace new approaches to teaching and storytelling',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <value.icon className="w-12 h-12 mx-auto text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;