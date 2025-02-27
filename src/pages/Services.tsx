import React from 'react';
import { motion } from 'framer-motion';
import { Code, PencilRuler, ShoppingBag, Truck, Newspaper,  } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-16">

      <section className="relative py-20 bg-gradient-to-br from-red-900 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            we provide industry-focused courses designed to help you master in-demand skills. 
            our hands-on training and expert guidance will set you on the path to success. 
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Full Stack Development',
                description: 'Master HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and MySQL to build full-stack web applications. Gain hands-on experience with real-world projects.',
                features: ['Hands-on projects', 'Frontend & Backend mastery', ' Database integration & API development', 'Deployment & DevOps basics'],
              },
              {
                icon: PencilRuler,
                title: 'UI/UX Designs',
                description: 'Learn Figma, Adobe XD, wireframing, prototyping, and user research to create stunning and user-friendly designs for web and mobile applications.',
                features: ['Wireframing & Prototyping', 'Color theory & typography', 'User research & testing', 'Responsive & interactive designs'],
              },
              {
                icon: Newspaper,
                title: 'Digital Marketing',
                description: 'Become an expert in SEO, social media marketing, Google Ads, and content marketing to grow businesses online with data-driven strategies.',
                features: ['SEO & keyword optimization', 'Social media strategies', 'Social media strategies', 'Email marketing & automation'],
              },
              {
                icon: ShoppingBag,
                title: 'E-Commerce Solution',
                description: 'Build and manage online stores with Shopify, WooCommerce, and custom solutions while learning marketing, payment integration, and inventory management.',
                features: ['Store setup & product listing', 'Payment gateway integration', 'Marketing & sales strategies', 'Inventory & order management'],
              },
              {
                icon: Truck,
                title: 'Drop Shipping',
                description: 'Start a low-investment e-commerce business with product sourcing, automation tools, and effective marketing strategies.',
                features: ['Product sourcing & selection', 'Building & scaling an online store', 'Marketing automation & customer retention', 'Maximizing profits with low investment'],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <service.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full btn btn-primary">Learn More</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Fiction Master today and take the first step towards becoming the writer you've always wanted to be.
            </p>
            <button className="btn btn-primary text-lg px-8 py-3">Get Started Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;