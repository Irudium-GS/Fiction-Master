import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import FullStack from '../components/Assets/Full-Stack.jpg';
import Ecommerce from '../components/Assets/E-commerce.jpg';
import UI from '../components/Assets/UI-Design.jpg';
import DropShip from '../components/Assets/Shipping.jpg';
import DigitalMarket from '../components/Assets/Digital-Marketing.jpg'

const Courses = () => {
  return (
    <div className="pt-16">

      <section className="relative py-20 bg-gradient-to-br from-red-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Courses</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your skills with our comprehensive course catalog.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Business',
                courses: [
                  {
                    title: 'E-Commerce Solutions',
                    image: Ecommerce,
                    duration: '12 weeks',
                    students: '250+',
                    rating: '4.9',
                    //price: '$299',
                  },
                  {
                    title: 'Drop Shipping',
                    image: DropShip,
                    duration: '6 weeks',
                    students: '180+',
                    rating: '4.8',
                    //price: '$149',
                  },
                ],
              },
              {
                title: 'Non-Coding',
                courses: [
                  {
                    title: 'UI/UX Design',
                    image: UI,
                    duration: '8 weeks',
                    students: '150+',
                    rating: '4.7',
                    //price: '$199',
                  },
                  {
                    title: 'Digital Marketing',
                    image: DigitalMarket,
                    duration: '4 weeks',
                    students: '120+',
                    rating: '4.8',
                    //price: '$99',
                  },
                ],
              },
              {
                title: 'Programming',
                courses: [
                  {
                    title: 'Full Stack Development',
                    image: FullStack,
                    duration: '16 weeks',
                    students: '200+',
                    rating: '4.9',
                    //price: '$299',
                  },
                  
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <div className="space-y-6">
                  {category.courses.map((course) => (
                    <div
                      key={course.title}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-red-600 mr-2" />
                            <span className="text-sm text-gray-600">{course.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 text-red-600 mr-2" />
                            <span className="text-sm text-gray-600">{course.students}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-red-600 mr-2" />
                            <span className="text-sm text-gray-600">{course.rating}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-red-600">{course.price}</span>
                          <button className="btn btn-primary">Enroll Now</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Courses?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Expert Instructors',
                description: 'Learn from published authors and industry professionals',
              },
              {
                icon: Users,
                title: 'Small Classes',
                description: 'Personal attention and detailed feedback on your work',
              },
              {
                icon: Clock,
                title: 'Flexible Schedule',
                description: 'Study at your own pace with lifetime access',
              },
              {
                icon: Star,
                title: 'Proven Results',
                description: 'Join our successful alumni of published authors',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.icon className="w-12 h-12 mx-auto text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;